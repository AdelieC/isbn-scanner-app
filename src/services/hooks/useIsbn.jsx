//libraries
import { useEffect, useState } from 'react';

//services
import useFetchGoogleBook from './useFetchGoogleBook';
import useFetchOpenLibraryBook from './useFetchOpenLibraryBook';
import Book from '../../objects/Book';

//components

function useIsbn() {
    const [isbn, setIsbn] = useState(null);
    const [book, setBook] = useState(new Book());
    const [noResult, setNoResult] = useState(false);
    const reset = () => {
        setBook(new Book());
        setIsbn(null);
        setNoResult(false);
    };

    const { noResult: noGoogleResult, book: googleBook } = useFetchGoogleBook({
        isbn,
    });

    const { noResult: noOpenLibResult, book: openLibBook } = useFetchOpenLibraryBook({
        isbn,
    });

    const getAggregatedBook = (book1, book2) => {
        console.log('aggregating');
        return book1 && book2 ? Object.assign(Book, ...book1, ...book2) : book1 || book2;
    };

    useEffect(() => {
        console.log(googleBook, openLibBook);
        if (isSearchSuccessfull()) setBook(getAggregatedBook(openLibBook, googleBook));
    }, [googleBook, openLibBook, noOpenLibResult, noGoogleResult]);

    const isSearchSuccessfull = () => {
        return (
            (openLibBook && googleBook) ||
            (openLibBook && noGoogleResult) ||
            (googleBook && noOpenLibResult)
        );
    };

    useEffect(() => {
        console.log(noOpenLibResult);
        if (noOpenLibResult && noGoogleResult) setNoResult(true);
    }, [noOpenLibResult, noGoogleResult]);

    return {
        book,
        setIsbn,
        reset,
        noResult,
    };
}

useIsbn.propTypes = {};

export default useIsbn;
