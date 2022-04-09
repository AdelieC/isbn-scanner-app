import * as PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function RatingDetails({ rating = 0, nbRatings = 0, scale = 5 }) {
    const { t } = useTranslation('book-details');

    return (
        <div className="text-tertiaryDark font-heading text-base flex gap-1 items-center">
            {rating + '/' + scale}
            <span className="text-xs">
                {'(' + nbRatings + ' ' + t('nb-ratings') + ' )'}
            </span>
        </div>
    );
}

RatingDetails.propTypes = {
    rating: PropTypes.number,
    nbRatings: PropTypes.number,
    scale: PropTypes.number,
};

export default RatingDetails;
