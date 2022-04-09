//libraries

//services

//components

import PropTypes from 'prop-types';
import { ICON_QUESTION_MARK } from '../../services/globals/icons';

function DetailsRow({ description = null, value = '' }) {
    return (
        <p className="text-sm flex flex-wrap items-center justify-start gap-2 sm:gap-4 text-tertiaryDark">
            {description && (
                <span className="">
                    <u>{description}</u> :
                </span>
            )}
            {value ? (
                <span className="max-w-full text-justify">{value}</span>
            ) : (
                ICON_QUESTION_MARK
            )}
        </p>
    );
}

DetailsRow.propTypes = {
    description: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DetailsRow;
