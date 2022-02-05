//libraries
import PropTypes from 'prop-types';

//services

//components

function IconButton({ isToggled, setIsToggled, icon1, icon2, color1, color2 }) {
    const toggle = () => {
        setIsToggled(!isToggled);
    };
    return (
        <button onClick={toggle} className={'z-50 text-' + (isToggled ? color2 : color1)}>
            {isToggled ? icon2 : icon1}
        </button>
    );
}

IconButton.propTypes = {
    isToggled: PropTypes.bool.isRequired,
    setIsToggled: PropTypes.func.isRequired,
    icon1: PropTypes.element.isRequired,
    icon2: PropTypes.element.isRequired,
    color1: PropTypes.string,
    color2: PropTypes.string,
};

export default IconButton;
