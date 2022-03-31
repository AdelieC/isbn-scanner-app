import PropTypes from 'prop-types';
import Book from '../../objects/Book';
import { useQuery } from 'react-query';
import { fetchBookDetails } from '../queries/other-apis/OpenLibraryApi';
import { useEffect, useState } from 'react';
import Author from '../../objects/Author';

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
        book.categories = details?.subjects
            ? [...book.categories, ...details.subjects]
            : [...book.categories];
        book.title = book.title || details?.title;
        book.publisher = book.publisher || details?.publishers[0];
        book.publishedAt = book.publishedAt || details?.publish_date;
        book.nbPages = book.nbPages || details?.number_of_pages;
        book.image = book.image || bookData?.thumbnail_url;
        book.language = book.language || details?.languages?.key?.split('/').pop();
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
