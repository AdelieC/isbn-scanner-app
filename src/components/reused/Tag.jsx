//libraries
import PropTypes from 'prop-types';
import { randomInteger } from '../../services/utils/NumberFunctions';

//services

//components
const BACKGROUNDS = ['bg-primaryDark', 'bg-successDark', 'bg-secondaryDark'];

function Tag({ link, text }) {
    const background = BACKGROUNDS[randomInteger(0, BACKGROUNDS.length - 1)];
    return (
        <a
            className={
                'flex items-center justify-center gap-2 px-4 py-1 rounded-lg shadow-lg text-secondaryLight ' +
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
};

export default Tag;
