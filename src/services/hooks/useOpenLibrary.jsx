//libraries
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { fetchBookDetails } from '../queries/other-apis/OpenLibraryApi';
import { useEffect, useState } from 'react';

//services
import Book from '../../objects/Book';
import { serializeOpenLibraryBook } from '../serializers/OpenLibrarySerializer';

//components

function useOpenLibrary({ isbn, book }) {
    const [noResult, setNoResult] = useState(false);
    const { data: bookData, refetch } = useQuery(
        ['openLibraryDetails', isbn],
        () => fetchBookDetails(isbn),
        {
            enabled: false,
        }
    );
    useEffect(() => {
        if (isbn) refetch();
    }, [isbn]);

    useEffect(() => {
        if (bookData?.details) {
            serializeOpenLibraryBook(book, bookData);
        } else if (isbn && bookData?.length === 0) {
            setNoResult(true);
        }
    }, [bookData]);

    return { noResult };
}

useOpenLibrary.propTypes = {
    isbn: PropTypes.string.isRequired,
    book: PropTypes.instanceOf(Book).isRequired,
};

export default useOpenLibrary;
