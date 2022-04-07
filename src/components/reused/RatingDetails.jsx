import * as PropTypes from 'prop-types';

function RatingDetails({ rating = 0, nbRatings = 0, scale = 5 }) {
    return (
        <div className="text-tertiaryDark font-heading text-base flex gap-1 items-center">
            {rating + '/' + scale}
            <span className="text-xs">{'(' + nbRatings + ' ratings)'}</span>
        </div>
    );
}

RatingDetails.propTypes = {
    rating: PropTypes.number,
    nbRatings: PropTypes.number,
    scale: PropTypes.number,
};

export default RatingDetails;
