//libraries
import PropTypes from 'prop-types';

function BaseModal({ children }) {
    return (
        <div className="z-50 fixed top-0 left-0 h-screen w-screen bg-tertiaryDark bg-opacity-30 p-12 sm:p-40">
            {children}
        </div>
    );
}

BaseModal.propTypes = {
    children: PropTypes.node,
};

export default BaseModal;
