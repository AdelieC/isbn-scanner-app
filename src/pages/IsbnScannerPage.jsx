//libraries
import { useEffect } from 'react';

//services
import useCamera from '../services/hooks/useCamera';
import useToggle from '../services/hooks/useToggle';
import useScan from '../services/hooks/useScan';

//components
import IconButton from '../components/reused/IconButton';
import { HiLightBulb, HiOutlineLightBulb } from 'react-icons/hi';
import Scanner from '../components/specific/IsbnScanner/Scanner';
import { MdCameraswitch } from 'react-icons/md';

function IsbnScannerPage(props) {
    const { scan, stopScan, book, isScanning } = useScan();
    const { isOn: lightIsOn, toggle } = useToggle();
    const { changeCamera } = useCamera();

    useEffect(() => {
        console.log('in scannerpage', book);
    }, [book]);
    useEffect(() => {
        scan();
        return () => stopScan();
    }, []);

    return (
        <div className="h-screen w-screen overflow-hidden">
            <div className="z-20 absolute top-24 w-full flex items-end justify-center">
                <IconButton
                    callback={changeCamera}
                    color={'text-primaryLight'}
                    icon={<MdCameraswitch />}
                />
                <IconButton
                    callback={toggle}
                    color={lightIsOn ? 'text-secondaryDark' : 'text-primaryLight'}
                    icon={lightIsOn ? <HiOutlineLightBulb /> : <HiLightBulb />}
                />
            </div>
            {isScanning && <Scanner />}
        </div>
    );
}

IsbnScannerPage.propTypes = {};

export default IsbnScannerPage;
