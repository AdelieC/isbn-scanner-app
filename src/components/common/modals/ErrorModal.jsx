//libraries
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

//services
//components
import BaseModal from './BaseModal';

function ErrorModal({ text, buttonText, icon, link, callback }) {
    const navigate = useNavigate();
    const goToLink = () => {
        navigate(link);
    };
    return (
        <BaseModal>
            <h3>Uh oh...</h3>
            {icon}
            <p>{text}</p>
            <button onClick={callback || goToLink}>{buttonText}</button>
        </BaseModal>
    );
}

ErrorModal.propTypes = {
    text: PropTypes.string,
    buttonText: PropTypes.string,
    icon: PropTypes.element,
    link: PropTypes.string,
    callback: PropTypes.func,
};

export default ErrorModal;
