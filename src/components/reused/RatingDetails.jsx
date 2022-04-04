import * as PropTypes from 'prop-types';

function RatingDetails({ rating, nbRatings, scale = 5 }) {
    return (
        <div className="text-tertiaryDark font-heading text-md flex gap-1 items-center">
            {rating + '/' + scale}
            <span className="text-xs">{'(' + nbRatings + ' ratings)'}</span>
        </div>
    );
}

RatingDetails.propTypes = {
    rating: PropTypes.number.isRequired,
    nbRatings: PropTypes.number.isRequired,
    scale: PropTypes.number,
};

export default RatingDetails;
