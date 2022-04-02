//libraries
import PropTypes from 'prop-types';

function BaseModal({ children }) {
    return (
        <div className="z-50 fixed top-0 left-0 h-screen w-screen bg-tertiaryDark bg-opacity-30 p-40">
            <div className="bg-alertLight text-alertDark w-full h-full p-8 sm:p-16 rounded-xl shadow-xl flex flex-col justify-between items-center gap-4">
                {children}
            </div>
        </div>
    );
}

BaseModal.propTypes = {
    children: PropTypes.node,
};

export default BaseModal;
