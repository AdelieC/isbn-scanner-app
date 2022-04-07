//libraries
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LinkButton from './LinkButton';
//services

//components

function SectionCard({ text, icon, background, link, buttonText }) {
    const sectionClasses = classNames(
        'flex',
        'flex-col',
        'justify-between',
        'items-center',
        'gap-4',
        'rounded-xl',
        'p-4',
        'sm:p-8',
        'text-secondaryDark',
        'shadow-xl'
    );
    return (
        <section className={sectionClasses + ' ' + background}>
            {icon}
            <p className="text-primaryDark text-base sm:text-xl max-w-xs">{text}</p>
            <LinkButton
                link={link}
                buttonText={buttonText}
                textColor={'text-secondaryDark'}
                background={'bg-secondaryLight'}
            />
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
