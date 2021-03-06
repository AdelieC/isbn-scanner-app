//libraries
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

//services
//components
import BaseModal from './BaseModal';
import { VscWarning } from 'react-icons/vsc';
import { useStatusContext } from '../../../services/providers/StatusProvider';

function ErrorModal({ error }) {
    const navigate = useNavigate();
    const { setError } = useStatusContext();
    const handleClick = () => {
        if (error?.callback) error.callback();
        else navigate(error.link || -1);
        setError(null);
    };
    return (
        <BaseModal>
            <div className="bg-alertLight text-alertDark w-full h-full p-8 sm:p-16 rounded-xl shadow-xl flex flex-col justify-between items-center gap-4">
                <h3 className="text-alertDark text-4xl font-heading">Uh oh...</h3>
                {error?.icon || <VscWarning className="w-20 h-20" />}
                <p>
                    {error?.message ||
                        "An error occurred. Try refreshing the page if you don't want to click on the button below."}
                </p>
                <button
                    className="px-3 py-2 font-heading rounded-lg shadow-lg bg-alertDark text-alertLight"
                    onClick={handleClick}
                >
                    {error?.buttonText || 'Go back'}
                </button>
            </div>
        </BaseModal>
    );
}

ErrorModal.propTypes = {
    error: PropTypes.instanceOf(Error),
};

export default ErrorModal;
