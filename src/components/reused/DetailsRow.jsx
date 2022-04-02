//libraries

//services

//components

import PropTypes from 'prop-types';

function DetailsRow({ description = null, value }) {
    return (
        <p className="flex flex-col sm:flex-row w-full justify-between items-center gap-4">
            {description && <span className="font-bold">{description} :</span>}
            <span>{value}</span>
        </p>
    );
}

DetailsRow.propTypes = {
    description: PropTypes.string,
    value: PropTypes.string,
};

export default DetailsRow;
