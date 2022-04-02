//libraries
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';

//services
import Author from '../../objects/Author';
import Book from '../../objects/Book';
import { fetchBookDetails, fetchBookId } from '../queries/other-apis/GoogleBooksApi';

//components

function useGoogleBooks({ isbn, book }) {
    const [noResult, setNoResult] = useState(false);

    const { data: bookId } = useQuery(['googleBookId', isbn], () => fetchBookId(isbn), {
        enabled: !!isbn,
    });

    const { data: bookData } = useQuery(
        ['googleBookDetails', bookId],
        () => fetchBookDetails(bookId),
        {
            enabled: !!bookId,
        }
    );

    useEffect(() => {
        if (bookData?.volumeInfo) fillBookWithData();
        else setNoResult(true);
    }, [bookData]);

    const fillBookWithData = () => {
        const volumeInfo = bookData?.volumeInfo;
        const saleInfo = bookData?.saleInfo;

        if (volumeInfo?.industryIdentifiers?.length) {
            for (let entry of bookData.volumeInfo.industryIdentifiers) {
                if (entry.type === 'ISBN_10') {
                    book.isbn = book.isbn || entry.identifier;
                } else if (entry.type === 'ISBN_13') {
                    book.ean = book.ean || entry.identifier;
                }
            }
        }

        volumeInfo?.authors?.forEach((author) => addAuthor(book, author));
        addDimensions(book, volumeInfo?.dimensions);
        book.categories = volumeInfo?.categories
            ? [...book.categories, ...volumeInfo.categories]
            : [...book.categories];
        book.title = book.title || volumeInfo?.title;
        book.publisher = book.publisher || volumeInfo?.publisher;
        book.publishedAt = book.publishedAt || volumeInfo?.publishedDate;
        book.synopsis = book.synopsis || volumeInfo?.description;
        book.nbPages = book.nbPages || volumeInfo?.pageCount;
        book.rating = book.rating || volumeInfo?.averageRating;
        book.nbRatings = book.nbRatings || volumeInfo?.ratingsCount;
        book.image = book.image || volumeInfo?.imageLinks?.thumbnail;
        book.language = book.language || volumeInfo?.language;
        book.googlePlayLink = book.googlePlayLink || saleInfo?.buyLink || '';
        book.priceNew =
            book.priceNew || saleInfo?.listPrice
                ? saleInfo.listPrice?.amount + saleInfo.listPrice?.currencyCode
                : '';
        book.priceRetail =
            book.priceRetail || saleInfo?.retailPrice
                ? saleInfo.retailPrice?.amount + saleInfo.retailPrice?.currencyCode
                : '';
    };

    const addDimensions = (book, initialArray) => {
        book.dimensions.height = initialArray?.height;
        book.dimensions.width = initialArray?.width;
        book.dimensions.thickness = initialArray?.thickness;
    };

    const addAuthor = (book, name) => {
        const author = new Author();
        const nameArray = name.split(' ');
        author.firstName = nameArray.shift();
        author.lastName = nameArray.join(' ');
        book.authors.push(author);
    };

    return { noResult };
}

useGoogleBooks.propTypes = {
    isbn: PropTypes.string.isRequired,
    book: PropTypes.instanceOf(Book).isRequired,
};

export default useGoogleBooks;
