//libraries
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

//components
import BaseModal from './BaseModal';
import Success from '../../../services/status/Success';
import { useStatusContext } from '../../../services/providers/StatusProvider';

function SuccessModal({ success }) {
    const navigate = useNavigate();
    const { setSuccess } = useStatusContext();

    const handleClick = () => {
        if (success?.callback) success.callback();
        else navigate(success.link || -1);
        setSuccess(null);
    };

    return (
        <BaseModal>
            <div className="bg-alertLight text-alertDark w-full h-full p-8 sm:p-16 rounded-xl shadow-xl flex flex-col justify-between items-center gap-4">
                <h3 className="font-heading text-successDark text-4xl">Success!</h3>
                {success.icon}
                <p>{success.message || 'Action was accomplished successfully!'}</p>
                <button
                    className="px-3 py-2 font-heading rounded-lg shadow-lg bg-alertDark text-alertLight"
                    onClick={handleClick}
                >
                    {success.buttonText || 'Go back'}
                </button>
            </div>
        </BaseModal>
    );
}

SuccessModal.propTypes = {
    success: PropTypes.instanceOf(Success),
};

export default SuccessModal;
