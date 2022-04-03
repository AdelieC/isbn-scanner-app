//libraries
import { useEffect, useState } from 'react';

//services
import useGoogleBooks from './useGoogleBooks';
import useOpenLibrary from './useOpenLibrary';
import Book from '../../objects/Book';

//components

function useIsbn() {
    const [isbn, setIsbn] = useState(null);
    const [book, setBook] = useState(new Book());
    const reset = () => {
        setBook(new Book());
        setIsbn(null);
    };
    const { noResult: noGoogleResult } = useGoogleBooks({ isbn, book });
    const { noResult: noOpenLibResult } = useOpenLibrary({ isbn, book });

    useEffect(() => {
        console.log(noOpenLibResult, noGoogleResult);
    }, [noGoogleResult, noOpenLibResult]);
    return {
        book,
        setIsbn,
        reset,
        noResult: noGoogleResult && noOpenLibResult,
    };
}

useIsbn.propTypes = {};

export default useIsbn;
