//libraries
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { fetchBookDetails } from '../queries/other-apis/OpenLibraryApi';
import { useEffect, useState } from 'react';

//services
import Book from '../../objects/Book';
import Author from '../../objects/Author';

//components

const getThumbnailUrl = (coverId) => {
    return process.env.REACT_APP_OPEN_LIBRARY_COVERS_URL + '/' + coverId + '-M.jpg';
};

function useOpenLibrary({ isbn, book }) {
    const [noResult, setNoResult] = useState(false);
    const { data: bookData } = useQuery(
        ['openLibraryDetails', isbn],
        () => fetchBookDetails(isbn),
        {
            enabled: !!isbn,
        }
    );

    useEffect(() => {
        if (bookData?.details) fillBookWithData();
        else setNoResult(true);
    }, [bookData]);

    const fillBookWithData = () => {
        const details = bookData?.details;
        book.isbn = book.isbn || details?.isbn_10[0];
        book.ean = book.ean || details?.isbn_13[0];

        const description = details?.description;
        if (description) {
            book.synopsis = book.synopsis || description?.value;
        }

        addOpenLibAuthorsData(book, details?.authors);
        addImageUrl(book, details?.covers);
        book.categories = details?.subjects
            ? [...book.categories, ...details.subjects]
            : [...book.categories];
        book.title = book.title || details?.title;
        book.publisher = book.publisher || details?.publishers[0];
        book.publishedAt = book.publishedAt || details?.publish_date;
        book.nbPages = book.nbPages || details?.number_of_pages;
        book.language = book.language || details?.languages?.key?.split('/').pop();
    };

    const addImageUrl = (book, covers) => {
        if (!book.image && covers.length) {
            book.image = getThumbnailUrl(covers[0]);
        }
    };

    const addAuthor = (book, name, id = '') => {
        const author = new Author();
        const nameArray = name.split(' ');
        author.firstName = nameArray.shift();
        author.lastName = nameArray.join(' ');
        author.openLibraryId = id;
        book.authors.push(author);
    };

    const addOpenLibAuthorsData = (book, authorsData) => {
        authorsData.forEach((entry) => {
            const matchingAuthors = book.authors?.filter((author) =>
                entry.name.toLowerCase().includes(author.lastName.toLowerCase())
            );
            const authorId = entry.key.split('/').pop();
            if (matchingAuthors.length) matchingAuthors[0].openLibraryId = authorId;
            else addAuthor(book, entry.name, authorId);
        });
    };

    return { noResult };
}

useOpenLibrary.propTypes = {
    isbn: PropTypes.string.isRequired,
    book: PropTypes.instanceOf(Book).isRequired,
};

export default useOpenLibrary;
