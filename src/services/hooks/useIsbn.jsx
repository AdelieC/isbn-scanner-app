import { useQuery } from 'react-query';
import { addBook, searchByIsbn } from '../queries/fake-api/BookQueries';
import {
    searchInGoogleBooks,
    searchInOpenLibrary,
} from '../queries/other-apis/IsbnQueries';
import { useEffect, useState } from 'react';

/*const BOOK_STRUCTURE = [
    'title',
    'authors',
    'publishers',
    'language',
    'publishedAt',
    'nbPages',
    'format',
    'synopsis',
    'image',
    'isbn',
    'ean',
];*/

const handleGoogleResult = (res) => {
    console.log(res);
    const json = {};
    return json?.items?.length > 0 ? formatGoogleBook(json.items[0]?.volumeInfo) : {};
};

const handleOpenLibraryResult = (res, isbn) => {
    console.log(res);
    const key = 'ISBN:' + isbn;
    const json = {};
    return json && json[key] ? formatOpenLibBook(json[key]) : {};
};

const formatOpenLibBook = (bookData) => {
    console.log(bookData);
};

const formatGoogleBook = (bookData) => {
    let isbn, ean;

    //setting isbn and ean
    if (bookData?.industryIdentifiers?.length > 0) {
        for (let obj of bookData.volumeInfo.industryIdentifiers) {
            if (obj.type === 'ISBN_10') {
                isbn = obj.identifier;
            } else if (obj.type === 'ISBN_13') {
                ean = obj.identifier;
            }
        }

        return {
            title: bookData?.title,
            authors: getFormattedAuthors(bookData?.authors),
            publisher: bookData?.publisher,
            publishedDate: bookData?.publishedDate,
            synopsis: bookData?.description,
            ean: ean,
            isbn: isbn,
            nbPages: bookData?.pageCount,
            categories: bookData?.categories,
            rating: bookData?.averageRating,
            nbRatings: bookData?.ratingsCount,
            image: bookData?.imageLinks?.thumbnail,
            language: bookData?.language,
            googlePlayLink: bookData?.saleInfo?.buyLink,
            priceNew:
                bookData?.saleInfo?.listPrice?.amount +
                bookData?.saleInfo?.listPrice?.currencyCode,
            priceRetail:
                bookData?.saleInfo?.retailPrice?.amount +
                bookData?.saleInfo?.retailPrice?.currencyCode,
        };
    }
};

const getFormattedAuthors = (initialArray) => {
    const authors = [];
    for (let author of initialArray) {
        const nameArray = author.split(' ');
        const authorObject = {
            firstName: nameArray.shift(),
            lastName: nameArray.join(' '),
        };
        authors.push(authorObject);
    }
    return authors;
};

const crossReferences = (bookData1, bookData2) => {
    Object.keys(bookData1).forEach((key) => {
        if (!bookData1[key]) bookData1[key] = bookData2[key];
    });
    return bookData1;
};

const handleFinalResults = async (setBookFound, setHasNoResult, bookData1, bookData2) => {
    if (Object.keys(bookData1).length > 0) {
        const book = await addBook(crossReferences(bookData1, bookData2));
        setBookFound(book);
    } else {
        setHasNoResult(true);
    }
};

function useIsbn(isbn) {
    const [bookFound, setBookFound] = useState(null);
    const [hasNoResult, setHasNoResult] = useState(false);
    const [keepSearching, setKeepSearching] = useState(false);
    const { data: googleBook } = useQuery(
        ['findIsbnInGoogleApi'],
        () => searchInGoogleBooks(isbn),
        {
            retry: false,
            enabled: keepSearching,
            select: (data) => {
                return handleGoogleResult(data);
            },
        }
    );

    const { data: openLibraryBook } = useQuery(
        ['findIsbnInOpenLibraryApi'],
        () => searchInOpenLibrary(isbn),
        {
            retry: false,
            enabled: keepSearching,
            select: (data) => {
                return handleOpenLibraryResult(data, isbn);
            },
        }
    );

    useQuery(['findIsbnInLocalApi', isbn], () => searchByIsbn(isbn), {
        retry: false,
        enabled: !bookFound && !hasNoResult,
        select: (data) => {
            if (data.title) {
                setBookFound(data);
            } else {
                setKeepSearching(true);
            }
        },
    });

    useEffect(() => {
        console.log('useEffect', openLibraryBook, googleBook);
        if (openLibraryBook && googleBook) {
            const bestSetOfData =
                Object.keys(googleBook).length > Object.keys(openLibraryBook).length
                    ? googleBook
                    : openLibraryBook;
            const lesserSet = bestSetOfData === googleBook ? openLibraryBook : googleBook;
            handleFinalResults(
                setBookFound,
                setHasNoResult,
                bestSetOfData,
                lesserSet
            ).then(() => setKeepSearching(false));
        }
    }, [openLibraryBook, googleBook]);

    return {
        bookFound,
        hasNoResult,
    };
}

useIsbn.propTypes = {};

export default useIsbn;
