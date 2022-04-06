//libraries
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';

//services
import { fetchBooksByCategory } from '../queries/other-apis/GoogleBooksApi';
import { serializeGoogleBook } from '../serializers/GoogleBooksSerializer';

//components

const MAX_RESULTS_PER_QUERY = 40;

const bookHasIsbn = (book) => {
    const industryIds = book?.volumeInfo?.industryIdentifiers;
    if (!industryIds) return false;
    let hasIsbn = false;
    let i = 0;
    while (i < industryIds.length && !hasIsbn) {
        hasIsbn = industryIds[i].type.includes('ISBN');
        i++;
    }
    return hasIsbn;
};

//hook to fetch a single book instance from google books api
function useFetchGoogleBookList({ category }) {
    const [noResult, setNoResult] = useState(false);
    const [books, setBooks] = useState([]);
    const [hasNextPage, setHasNextPage] = useState(false);
    const [startIndex, setStartIndex] = useState(0);

    const reset = () => {
        setStartIndex(0);
        setBooks([]);
        setHasNextPage(false);
        setNoResult(false);
    };

    const handleGoogleBookByCategorySuccess = (data) => {
        if (data.totalItems > 0) {
            data.items.forEach((bookData) => {
                if (bookData && bookHasIsbn(bookData)) {
                    setBooks((prevState) => [
                        ...prevState,
                        serializeGoogleBook(bookData),
                    ]);
                }
            });
            const nextIndex = startIndex + MAX_RESULTS_PER_QUERY;
            const allResultsWereFetched = nextIndex >= data.totalItems;
            setStartIndex(nextIndex);
            setHasNextPage(!allResultsWereFetched);
        } else {
            setNoResult(true);
        }
    };

    const { refetch: refetchByCategory } = useQuery(
        ['googleBooksByCategory', category, startIndex],
        () => fetchBooksByCategory(category, startIndex),
        {
            enabled: false,
            onSuccess: handleGoogleBookByCategorySuccess,
        }
    );

    useEffect(() => {
        if (category) {
            reset();
            refetchByCategory();
        }
    }, [category]);

    const getNextPage = () => {
        if (hasNextPage) refetchByCategory();
    };

    return { noResult, books, getNextPage, hasNextPage, reset };
}

useFetchGoogleBookList.propTypes = {
    isbn: PropTypes.string,
    id: PropTypes.string,
};

export default useFetchGoogleBookList;
