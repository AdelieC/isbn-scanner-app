import * as PropTypes from 'prop-types';
import { IoHeartHalf, IoHeartOutline, IoHeartSharp } from 'react-icons/io5';

const ICONS_CLASSLIST = 'w-6 h-6 text-secondaryDark';

function RatingStars({ rating, scale }) {
    console.log(rating);
    return (
        <div className="flex">
            {[...Array(scale)].map((x, i) => {
                console.log(i);
                const isHalf = rating < i + 1 && rating > i;
                const isFull = !isHalf && rating > i + 1;
                const isEmpty = !isHalf && rating < i + 1;
                if (isHalf) return <IoHeartHalf className={ICONS_CLASSLIST} />;
                if (isFull) return <IoHeartSharp className={ICONS_CLASSLIST} />;
                if (isEmpty) return <IoHeartOutline className={ICONS_CLASSLIST} />;
            })}
        </div>
    );
}

RatingStars.propTypes = {
    rating: PropTypes.number,
    scale: PropTypes.number,
};

export default RatingStars;
