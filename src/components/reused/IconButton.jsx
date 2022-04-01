//libraries
import PropTypes from 'prop-types';

//services

//components

function IconButton({ callback, icon, color }) {
    return (
        <button
            onClick={callback}
            className={'h-10 w-10 dropShadow' + (color ? color : 'text-secondaryDark')}
        >
            {icon}
        </button>
    );
}

IconButton.propTypes = {
    callback: PropTypes.func.isRequired,
    icon: PropTypes.element.isRequired,
    color: PropTypes.string.isRequired,
};

export default IconButton;
