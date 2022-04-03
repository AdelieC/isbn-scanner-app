//libraries
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

//services

//components

function LinkButton({
    link,
    icon = '',
    background = 'bg-successDark',
    textColor = 'text-successLight',
    buttonText,
    linkState,
}) {
    useEffect(() => {
        console.log(linkState);
    }, []);
    return (
        <Link
            className={
                'flex items-center justify-center gap-2 px-3 py-2 font-heading rounded-lg shadow-lg ' +
                background +
                ' ' +
                textColor
            }
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
