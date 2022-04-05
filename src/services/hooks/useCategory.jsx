//libraries
import { useEffect, useState } from 'react';
import { fetchBooksByCategory } from '../queries/other-apis/GoogleBooksApi';
import { useQuery } from 'react-query';

//services

//components

function useCategory({ category }) {
    const [noResult, setNoResult] = useState(false);
    const { data: books, refetch } = useQuery(['fetchByCategory', category], () =>
        fetchBooksByCategory(category)
    );

    const reset = () => {
        setNoResult(false);
    };

    useEffect(() => {
        if (category && books?.length === 0) setNoResult(true);
    }, [books]);

    return {
        books,
        reset,
        noResult,
    };
}

useCategory.propTypes = {};

export default useCategory;
