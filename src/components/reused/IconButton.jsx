//libraries
import PropTypes from 'prop-types';

//services

//components

function IconButton({ callback, icon, color }) {
    const handleClick = (e) => {
        e.target.disabled = true;
        callback();
        e.target.disable = false;
    };

    return (
        <button
            onClick={handleClick}
            className={
                'active:animate-spin dropShadow z-10 ' + (color || 'text-secondaryDark')
            }
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
