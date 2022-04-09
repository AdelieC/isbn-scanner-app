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
        isbn: isbn && isbn.replaceAll(/[- ]/g, ''),
    });

    const { noResult: noOpenLibResult, book: openLibBook } = useFetchOpenLibraryBook({
        isbn: isbn && isbn.replaceAll(/[- ]/g, ''),
    });

    const getAggregatedBook = (book1, book2) => {
        return book1 && book2 ? Object.assign(Book, ...book1, ...book2) : book1 || book2;
    };

    useEffect(() => {
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
        if (noOpenLibResult && noGoogleResult) setNoResult(true);
    }, [noOpenLibResult, noGoogleResult]);

    return {
        book,
        setIsbn,
        reset,
        noResult,
    };
}

export default useIsbn;
