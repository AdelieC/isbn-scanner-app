//libraries
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

//components
import BaseModal from './BaseModal';

function SuccessModal({ text, buttonText, icon, link, callback }) {
    const navigate = useNavigate();
    const goToLink = () => {
        navigate(link);
    };
    return (
        <BaseModal>
            <h3>Success!</h3>
            {icon}
            <p>{text}</p>
            <button onClick={callback || goToLink}>{buttonText}</button>
        </BaseModal>
    );
}

SuccessModal.propTypes = {
    text: PropTypes.string,
    buttonText: PropTypes.string,
    icon: PropTypes.element,
    link: PropTypes.string,
    callback: PropTypes.func,
};

export default SuccessModal;
