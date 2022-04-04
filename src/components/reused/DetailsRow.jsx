//libraries

//services

//components

import { GoQuestion } from 'react-icons/go';
import PropTypes from 'prop-types';

function DetailsRow({ description = null, value = '' }) {
    return (
        <p className="text-sm flex flex-col sm:flex-row justify-between items-center sm:justify-start gap-4">
            {description && (
                <span className="">
                    <u>{description}</u> :
                </span>
            )}
            {value ? (
                <span className="max-w-full text-justify">{value}</span>
            ) : (
                <GoQuestion className="text-primaryDark" />
            )}
        </p>
    );
}

DetailsRow.propTypes = {
    description: PropTypes.string,
    value: PropTypes.string,
};

export default DetailsRow;
