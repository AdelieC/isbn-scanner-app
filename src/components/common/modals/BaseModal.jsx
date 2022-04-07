//libraries
import PropTypes from 'prop-types';

function BaseModal({ children }) {
    return (
        <div className="flex justify-center items-center z-50 fixed top-0 left-0 h-screen w-screen bg-tertiaryDark text-tertiaryDark bg-opacity-30 p-8 sm:p-40 xl:p-72">
            {children}
        </div>
    );
}

BaseModal.propTypes = {
    children: PropTypes.node,
};

export default BaseModal;
