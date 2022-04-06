//libraries

//services

//components

import { useEffect, useState } from 'react';
import useFetchGoogleBookList from './useFetchGoogleBookList';

function useCategory() {
    const [category, setCategory] = useState();
    const [books, setBooks] = useState([]);
    const [noResult, setNoResult] = useState(false);

    const {
        noResult: noGoogleResult,
        books: googleBooks,
        getNextPage,
        hasNextPage,
        reset: resetFetch,
    } = useFetchGoogleBookList({
        category,
    });

    const reset = () => {
        setBooks([]);
        setCategory(null);
        setNoResult(false);
        resetFetch();
    };

    useEffect(() => {
        if (googleBooks?.length > 0) setBooks(googleBooks);
    }, [googleBooks]);

    useEffect(() => {
        if (noGoogleResult) setNoResult(true);
    }, [noResult]);

    return {
        books,
        setCategory,
        reset,
        noResult,
        hasNextPage,
        getNextPage,
    };
}

useCategory.propTypes = {};

export default useCategory;
