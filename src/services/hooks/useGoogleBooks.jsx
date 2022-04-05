//libraries
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';

//services
import Book from '../../objects/Book';
import { fetchBookDetails, fetchBookId } from '../queries/other-apis/GoogleBooksApi';
import { serializeGoogleBook } from '../serializers/GoogleBooksSerializer';

//components

function useGoogleBooks({ isbn, book }) {
    const [noResult, setNoResult] = useState(false);

    const { refetch: refetchId, data: bookId } = useQuery(
        ['googleBookId', isbn],
        () => fetchBookId(isbn),
        {
            enabled: false,
        }
    );

    const { refetch: refetchBook, data: bookData } = useQuery(
        ['googleBookDetails', bookId],
        () => fetchBookDetails(bookId),
        {
            enabled: false,
        }
    );

    useEffect(() => {
        if (bookData?.volumeInfo) serializeGoogleBook(book, bookData);
        else if (bookData?.length === 0) setNoResult(true);
    }, [bookData]);

    useEffect(() => {
        if (isbn) refetchId();
    }, [isbn]);

    useEffect(() => {
        if (bookId) refetchBook();
    }, [bookId]);

    return { noResult };
}

useGoogleBooks.propTypes = {
    isbn: PropTypes.string.isRequired,
    book: PropTypes.instanceOf(Book).isRequired,
};

export default useGoogleBooks;
