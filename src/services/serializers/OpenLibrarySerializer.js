//services
import Author from '../../objects/Author';
import Book from '../../objects/Book';

const getThumbnailUrl = (coverId) => {
    return process.env.REACT_APP_OPEN_LIBRARY_COVERS_URL + '/' + coverId + '-L.jpg';
};

const serializeOpenLibraryBook = (bookData) => {
    try {
        const book = new Book();
        const details = bookData?.details;

        book.isbn = details?.isbn_10 ? details.isbn_10[0] : '';
        book.ean = details?.isbn_13 ? details.isbn_13[0] : '';

        const description = details?.description;
        if (description) {
            book.synopsis = description?.value;
        }

        addOpenLibAuthorsData(book, details?.authors);
        addImageUrl(book, details?.covers);
        addCategories(book, details?.subjects);
        book.title = details?.title;
        book.publisher = details?.publishers[0];
        book.publishedAt = details?.publish_date;
        book.nbPages = details?.number_of_pages;
        book.language = details?.languages?.key?.split('/').pop();
        return book;
    } catch (e) {
        console.error(e);
    }
};

const addCategories = (book, categories) => {
    if (categories?.length) {
        book.categories = [...book.categories, ...categories];
    }
};

const addImageUrl = (book, covers) => {
    if (!book.image && covers?.length) {
        book.image = getThumbnailUrl(covers[0]);
    }
};

const addAuthor = (book, name, id = '') => {
    if (!authorExists(book?.authors, name?.toUpperCase())) {
        const author = new Author();
        const nameArray = name.toUpperCase().split(' ');
        author.firstName = nameArray.shift();
        author.lastName = nameArray.join(' ');
        author.openLibraryId = id;
        book.authors.push(author);
    }
};

const authorExists = (authors, author) => {
    return authors?.some((existingAuthor) => author?.includes(existingAuthor.lastName));
};

const addOpenLibAuthorsData = (book, authorsData) => {
    authorsData?.forEach((entry) => {
        const matchingAuthors = book.authors?.filter((author) =>
            entry.name.toUpperCase().includes(author.lastName.toUpperCase())
        );
        const authorId = entry.key.split('/').pop();
        if (matchingAuthors.length) matchingAuthors[0].openLibraryId = authorId;
        else addAuthor(book, entry.name, authorId);
    });
};

export { serializeOpenLibraryBook };
