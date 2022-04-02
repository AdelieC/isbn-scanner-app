//libraries
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

//components
import BaseModal from './BaseModal';
import Success from '../../../services/status/Success';

function SuccessModal({ success }) {
    const navigate = useNavigate();
    const goToLink = () => {
        navigate(success.link || -1);
    };
    return (
        <BaseModal>
            <h3 className={'text-successDark'}>Success!</h3>
            {success.icon}
            <p>{success.message || 'Action was accomplished successfully!'}</p>
            <button onClick={success.callback || goToLink}>
                {success.buttonText || 'Go back'}
            </button>
        </BaseModal>
    );
}

SuccessModal.propTypes = {
    success: PropTypes.instanceOf(Success),
};

export default SuccessModal;
