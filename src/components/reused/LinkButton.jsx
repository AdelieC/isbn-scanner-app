//libraries
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//services
import { CLASSLIST_BASE_BUTTON } from '../../services/globals/classlists';

//components

function LinkButton({
    link,
    icon = '',
    background = 'bg-successDark',
    textColor = 'text-successLight',
    buttonText,
    linkState,
}) {
    return (
        <Link
            className={CLASSLIST_BASE_BUTTON + background + ' ' + textColor}
            to={link}
            state={linkState}
        >
            {icon}
            {buttonText}
        </Link>
    );
}

LinkButton.propTypes = {
    link: PropTypes.string.isRequired,
    icon: PropTypes.element,
    background: PropTypes.string,
    textColor: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    linkState: PropTypes.object,
};

export default LinkButton;
