import * as PropTypes from 'prop-types';
import { IoHeartHalf, IoHeartOutline, IoHeartSharp } from 'react-icons/io5';

const ICONS_CLASSLIST = 'w-6 h-6 text-secondaryDark';

function RatingStars({ rating, scale = 5 }) {
    return (
        <div className="flex">
            {[...Array(scale)].map((x, i) => {
                const isHalf = rating < i + 1 && rating > i;
                const isFull = !isHalf && rating >= i + 1;
                const isEmpty = !isHalf && rating < i + 1;
                return (
                    <span key={'star-' + i}>
                        {isHalf && <IoHeartHalf className={ICONS_CLASSLIST} />}
                        {isFull && <IoHeartSharp className={ICONS_CLASSLIST} />}
                        {isEmpty && <IoHeartOutline className={ICONS_CLASSLIST} />}
                    </span>
                );
            })}
        </div>
    );
}

RatingStars.propTypes = {
    rating: PropTypes.number,
    scale: PropTypes.number,
};

export default RatingStars;
