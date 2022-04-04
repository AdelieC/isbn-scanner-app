//libraries
import PropTypes from 'prop-types';

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
            className={
                'flex items-center justify-center gap-2 px-4 py-2 font-heading rounded-lg shadow-lg ' +
                background +
                ' ' +
                textColor
            }
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
