import { useState } from 'react';

function useToggle() {
    const [isOn, setIsOn] = useState(false);
    const toggle = () => {
        setIsOn(!isOn);
    };
    return { isOn, toggle };
}

useToggle.propTypes = {};

export default useToggle;
