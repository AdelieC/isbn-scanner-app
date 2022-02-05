//libraries

//services

//components

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function SectionCard({ text, background, buttonColor, link, buttonText }) {
    return (
        <section
            className={
                'w-80 flex flex-col justify-between gap-4 rounded-xl bg-' +
                background +
                ' p-4 text-secondaryLight shadow'
            }
        >
            {text}
            <Link
                className={
                    'px-3 py-2 font-heading bg-' +
                    buttonColor +
                    ' text-primaryDark rounded-lg shadow-lg'
                }
                to={link}
            >
                {buttonText}
            </Link>
        </section>
    );
}

SectionCard.propTypes = {
    text: PropTypes.string.isRequired,
    background: PropTypes.string,
    buttonColor: PropTypes.string,
    link: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
};

export default SectionCard;
