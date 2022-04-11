import PropTypes from 'prop-types';
import { CLASSLIST_BASE_BUTTON } from '../../services/globals/classlists';

function ActionButton({ action, text, icon, background, textColor }) {
    const handleClick = (e) => {
        e.target.disabled = true;
        action();
        e.target.disable = false;
    };

    return (
        <button
            onClick={handleClick}
            className={
                CLASSLIST_BASE_BUTTON +
                (background || 'bg-primaryDark') +
                ' ' +
                (textColor || 'text-secondaryLight')
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
