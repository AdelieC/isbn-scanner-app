import PropTypes from 'prop-types';
import { CLASSLIST_BASE_BUTTON } from '../../services/globals/classlists';

function SubmitButton({ text, icon }) {
    return (
        <button
            type="submit"
            className={CLASSLIST_BASE_BUTTON + 'bg-primaryDark text-secondaryLight'}
        >
            {icon}
            {text}
        </button>
    );
}

SubmitButton.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.element,
};

export default SubmitButton;
