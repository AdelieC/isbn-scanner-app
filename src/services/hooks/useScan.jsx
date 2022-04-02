//libraries
import Quagga from '@ericblade/quagga2';
import { useEffect, useState } from 'react';

//services
import useToggle from './useToggle';
import AppError from '../status/AppError';
import { getMostRepeatedValueInArr } from '../utils/ArrayFunctions';

//components
import { BiSad } from 'react-icons/bi';

//number of scanned barcode needed to get a reliable sample
const SAMPLE_NEEDED = 15;

//LACKS PRECISION ON PURPOSE : external apis responses can be weird
const ISBN_REGEX = /[0-9]{10,13}/;

//constraints to get camera permission
const preferredCameraConstraints = {
    audio: false,
    video: {
        facingMode: 'environment',
    },
};

//error thrown and displayed in error modal when scan not possible
const SCAN_ERROR = new AppError(
    'Cannot access your device camera, for some reason. Please make sure you have a camera, and you gave your browser access to it.',
    'Back',
    <BiSad className="w-20 h-20" />
);

//quagga init config
const computeCameraConfig = (cameraId) => {
    try {
        const supportedConstraints =
            navigator.mediaDevices.getSupportedConstraints() || [];

        const config = {
            inputStream: {
                name: 'Live',
                type: 'LiveStream',
                constraints: {},
                area: {
                    top: '30%',
                    right: '10%',
                    left: '10%',
                    bottom: '30%',
                },
            },
            frequency: 40,
            decoder: {
                readers: ['ean_reader'],
            },
            locate: false,
        };

        //compatibility of methods used to get devices id very unpredictable in mobiles
        if (cameraId) config.inputStream.constraints.deviceId = cameraId;

        //needed to avoid having to scan with frontal camera...
        if ('facingMode' in supportedConstraints)
            config.inputStream.constraints.facingMode = 'environment';

        //needed to optimize focus
        if ('focusMode' in supportedConstraints)
            config.inputStream.constraints.focusMode = 'continuous';
        return config;
    } catch (e) {
        console.error(e);
    }
};

//defaults camera id to the id of the camera supporting the preferred contraints
//also prompts for user permission!
const getBestSuitedCameraId = () => {
    try {
        return navigator.mediaDevices
            .getUserMedia(preferredCameraConstraints)
            .then((res) => {
                const videoTracks = res.getVideoTracks();
                if (videoTracks?.length) return videoTracks[0].getSettings().deviceId;
            });
    } catch (e) {
        throw SCAN_ERROR;
    }
};

function useScan() {
    const [cameraId, setCameraId] = useState('');
    const [cameras, setCameras] = useState([]);
    const [activeVideoTrack, setActiveVideoTrack] = useState(null);
    const [isScanning, setIsScanning] = useState(false);
    const [result, setResult] = useState(null);
    const [hasLight, setHasLight] = useState(false);
    const { isOn: lightIsOn, toggle, setIsOn } = useToggle();

    const scan = async () => {
        try {
            const resultSet = [];
            let config = null;
            if (cameraId) {
                config = computeCameraConfig(cameraId);
            } else {
                const initialCameraId = await getBestSuitedCameraId();
                setCameraId(initialCameraId);
                config = computeCameraConfig(initialCameraId);
            }
            setIsScanning(true);
            await Quagga.init(config, function (err) {
                if (err) {
                    console.error(err);
                    setIsScanning(false);
                    throw SCAN_ERROR;
                } else {
                    Quagga.start();
                    setAllCamerasAccessibleToQuagga();
                    handleCurrentVideoTrackSpecificities();
                }
            });
            Quagga.onDetected((res) => handleResult(res.codeResult.code, resultSet));
        } catch (e) {
            console.error("Scanner won't work.", e);
            throw SCAN_ERROR;
        }
    };

    const setAllCamerasAccessibleToQuagga = () => {
        Quagga.CameraAccess.enumerateVideoDevices().then((res) => {
            if (res?.length) setCameras(res.map((device) => device.deviceId));
        });
    };

    //set active track and determine if it has a light
    const handleCurrentVideoTrackSpecificities = () => {
        const currentTrack = Quagga.CameraAccess.getActiveTrack();
        const capabilities =
            typeof currentTrack.getCapabilities === 'function'
                ? currentTrack.getCapabilities()
                : currentTrack.getConstraints();
        if (capabilities.torch === true) {
            setHasLight(true);
        }
        setActiveVideoTrack(currentTrack);
    };

    //Putting scanned values into an array
    const handleResult = (result, resultSet) => {
        if (resultSet.length >= SAMPLE_NEEDED) processResultSet(resultSet);
        else resultSet.push(result);
    };

    //Once the array is full, getting the most frequent value from it and setting isbn
    const processResultSet = (resultSet) => {
        const mostFrequentResult = getMostRepeatedValueInArr(resultSet);
        if (mostFrequentResult.match(ISBN_REGEX)) {
            setResult(mostFrequentResult);
            stopScan();
        }
        resultSet.length = 0;
    };

    //Cutting quagga, camera flow and unregistering function (else scan won't start again)
    const stopScan = () => {
        if (lightIsOn) setIsOn(false);
        setIsScanning(false);
        Quagga.offDetected(handleResult);
        Quagga.stop();
    };

    //switching light
    const switchLight = () => {
        activeVideoTrack
            .applyConstraints({
                advanced: [{ torch: !lightIsOn }],
            })
            .then(() => toggle())
            .catch((e) => setHasLight(false));
    };

    //when user clicks on change camera button, if change can be done
    const changeCamera = () => {
        stopScan();
        const currentIndex = cameras.indexOf(cameraId);
        let newIndex = 0;
        if (currentIndex !== cameras.length - 1) newIndex = currentIndex + 1;
        setCameraId(cameras[newIndex]);
    };

    useEffect(() => {
        scan();
        return () => {
            if (isScanning) stopScan();
        };
    }, []);

    return {
        isScanning,
        lightIsOn,
        switchLight,
        changeCamera,
        result,
        cameras,
        hasLight,
    };
}

useScan.propTypes = {};

export default useScan;
