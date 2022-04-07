//libraries
import PropTypes from 'prop-types';
import { CLASSLIST_BASE_BUTTON } from '../../services/globals/classlists';

//services

//components

function ExternalLinkButton({
    link,
    icon = '',
    background = 'bg-successDark',
    textColor = 'text-successLight',
    buttonText,
    target = '_BLANK',
}) {
    return (
        <a
            className={CLASSLIST_BASE_BUTTON + background + ' ' + textColor}
            href={link}
            target={target}
        >
            {icon}
            {buttonText}
        </a>
    );
}

ExternalLinkButton.propTypes = {
    link: PropTypes.string.isRequired,
    icon: PropTypes.element,
    background: PropTypes.string,
    textColor: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
    target: PropTypes.string,
};

export default ExternalLinkButton;
