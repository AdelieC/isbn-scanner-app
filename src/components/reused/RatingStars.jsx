import * as PropTypes from 'prop-types';
import {
    ICON_HEART_EMPTY,
    ICON_HEART_FULL,
    ICON_HEART_HALF,
} from '../../services/globals/icons';

function RatingStars({ rating = 0, scale = 5 }) {
    return (
        <div className="flex text-secondaryDark">
            {[...Array(scale)].map((x, i) => {
                const isHalf = rating < i + 1 && rating > i;
                const isFull = !isHalf && rating >= i + 1;
                const isEmpty = !isHalf && rating < i + 1;
                return (
                    <span key={'star-' + i}>
                        {isHalf && ICON_HEART_HALF}
                        {isFull && ICON_HEART_FULL}
                        {isEmpty && ICON_HEART_EMPTY}
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
