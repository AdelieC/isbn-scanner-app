//libraries
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';

//services
import { fetchBookDetails, fetchBookId } from '../queries/external-apis/GoogleBooksApi';
import { serializeGoogleBook } from '../serializers/GoogleBooksSerializer';

//components

//hook to fetch a single book instance from google books api
function useFetchGoogleBook({ isbn, id = null }) {
    const [bookId, setBookId] = useState(id);
    const [noResult, setNoResult] = useState(false);
    const [book, setBook] = useState(null);

    const reset = () => {
        setBookId(id);
        setNoResult(false);
        setBook(null);
    };

    const handleGoogleBookDetailsSuccess = (data) => {
        data.volumeInfo ? setBook(serializeGoogleBook(data)) : setNoResult(true);
    };

    const handleGoogleBooksSuccess = (data) => {
        data ? setBookId(data) : setNoResult(true);
    };

    const { refetch: refetchId } = useQuery(
        ['googleBookId', isbn],
        () => fetchBookId(isbn),
        {
            enabled: false,
            onSuccess: handleGoogleBooksSuccess,
        }
    );

    const { refetch: refetchBook } = useQuery(
        ['googleBookDetails', bookId],
        () => fetchBookDetails(bookId),
        {
            enabled: false,
            onSuccess: handleGoogleBookDetailsSuccess,
        }
    );

    useEffect(() => {
        if (isbn) {
            reset();
            refetchId();
        }
    }, [isbn]);

    useEffect(() => {
        if (bookId) refetchBook();
    }, [bookId]);

    return { noResult, book };
}

useFetchGoogleBook.propTypes = {
    isbn: PropTypes.string,
    id: PropTypes.string,
};

export default useFetchGoogleBook;
