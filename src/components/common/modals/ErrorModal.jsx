//libraries
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

//services
//components
import BaseModal from './BaseModal';
import { VscWarning } from 'react-icons/vsc';

function ErrorModal({ error }) {
    const navigate = useNavigate();
    const goToLink = () => {
        navigate(error.link || -1);
    };
    return (
        <BaseModal>
            <h3 className="text-alert text-2xl">Uh oh...</h3>
            {error?.icon || <VscWarning className="w-20 h-20" />}
            <p>
                {error?.message ||
                    "An error occurred. Try refreshing the page if you don't want to click on the button below."}
            </p>
            <button onClick={error?.callback || goToLink}>
                {error?.buttonText || 'Go back'}
            </button>
        </BaseModal>
    );
}

ErrorModal.propTypes = {
    error: PropTypes.instanceOf(Error),
};

export default ErrorModal;
