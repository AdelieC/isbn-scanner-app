import { useState } from 'react';

function useCamera() {
    const [cameraId, setCameraId] = useState(null);
    const changeCamera = () => {
        //todo: finish this
        setCameraId('');
    };
    return { changeCamera, cameraId };
}

useCamera.propTypes = {};

export default useCamera;
