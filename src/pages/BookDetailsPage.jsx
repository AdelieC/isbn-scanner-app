//libraries

import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useOutletContext } from 'react-router-dom';
import Book from '../objects/Book';

function BookDetailsPage({ book }) {
    const { setTitle } = useOutletContext();
    useEffect(() => {
        if (book?.title) setTitle(book?.title);
    }, [book]);
    return <div></div>;
}

BookDetailsPage.propTypes = {
    book: PropTypes.instanceOf(Book),
};

export default BookDetailsPage;
