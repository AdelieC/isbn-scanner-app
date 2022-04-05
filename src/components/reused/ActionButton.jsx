import PropTypes from 'prop-types';

function ActionButton({ action, text, icon, background, textColor }) {
    return (
        <button
            onClick={action}
            className={
                (background || 'bg-primaryDark') +
                ' flex items-center text-center justify-center gap-2 px-4 py-2 font-heading rounded-lg shadow-lg ' +
                (textColor || 'text-secondaryDark')
            }
        >
            {icon}
            {text}
        </button>
    );
}

ActionButton.propTypes = {
    action: PropTypes.func,
    text: PropTypes.string,
    icon: PropTypes.element,
    background: PropTypes.string,
    textColor: PropTypes.string,
};

export default ActionButton;
