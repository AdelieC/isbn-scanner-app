//libraries
import PropTypes from 'prop-types';

//services

//components
const BACKGROUNDS = [
    'bg-primaryDark',
    'bg-successDark',
    'bg-secondaryDark',
    'bg-alertDark',
];

function Tag({ link, text, index = 0 }) {
    const background = BACKGROUNDS[index % BACKGROUNDS.length];
    return (
        <a
            className={
                'flex items-center justify-center gap-2 px-4 py-1 rounded-full shadow-lg text-center text-sm text-secondaryLight ' +
                background
            }
            href={link}
        >
            {text}
        </a>
    );
}

Tag.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    index: PropTypes.number,
};

export default Tag;
