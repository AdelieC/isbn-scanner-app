//libraries

//services

//components

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function SectionCard({ text, icon, background, link, buttonText }) {
    const sectionClasses = classNames(
        'flex',
        'flex-col',
        'justify-between',
        'items-center',
        'gap-4',
        'rounded-xl',
        'p-8',
        'text-secondaryLight',
        'shadow-xl'
    );
    return (
        <section className={sectionClasses + ' ' + background}>
            {icon}
            <p className="text-xl max-w-xs">{text}</p>
            <Link
                className={
                    'px-3 py-2 font-heading text-primaryDark rounded-lg shadow-lg bg-secondaryLight'
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
    background: PropTypes.string.isRequired,
    buttonColor: PropTypes.string,
    link: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
};

export default SectionCard;
