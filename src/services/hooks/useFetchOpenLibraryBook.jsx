//libraries
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';

//services
import { serializeOpenLibraryBook } from '../serializers/OpenLibrarySerializer';
import { fetchBookDetails } from '../queries/other-apis/OpenLibraryApi';

//components

function useFetchOpenLibraryBook({ isbn }) {
    const [noResult, setNoResult] = useState(false);
    const [book, setBook] = useState(null);

    const reset = () => {
        setNoResult(false);
        setBook(null);
    };

    const handleOpenLibraryDetailsSuccess = (data) => {
        data.details ? setBook(serializeOpenLibraryBook(data)) : setNoResult(true);
    };

    const { refetch } = useQuery(
        ['openLibraryDetails', isbn],
        () => fetchBookDetails(isbn),
        {
            enabled: false,
            onSuccess: handleOpenLibraryDetailsSuccess,
        }
    );

    useEffect(() => {
        if (isbn) {
            reset();
            refetch();
        }
    }, [isbn]);

    return { noResult, book };
}

useFetchOpenLibraryBook.propTypes = {
    isbn: PropTypes.string,
};

export default useFetchOpenLibraryBook;
