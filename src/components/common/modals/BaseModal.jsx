//libraries
import PropTypes from 'prop-types';

function BaseModal({ children }) {
    return <div className="absolute h-screen w-screen bg-black p-12">{children}</div>;
}

BaseModal.propTypes = {
    children: PropTypes.node,
};

export default BaseModal;
