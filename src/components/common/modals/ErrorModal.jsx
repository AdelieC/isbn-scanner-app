//libraries
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

//services
//components
import BaseModal from './BaseModal';

function ErrorModal({ text, buttonText, icon, link, callback }) {
    const navigate = useNavigate();
    const goToLink = () => {
        navigate(link || -1);
    };
    return (
        <BaseModal>
            <h3 className="text-alert text-2xl">Uh oh...</h3>
            {icon}
            <p>
                {text ||
                    "An error occurred. Try refreshing the page if you don't want to click on the button below."}
            </p>
            <button onClick={callback || goToLink}>{buttonText || 'Go back'}</button>
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
