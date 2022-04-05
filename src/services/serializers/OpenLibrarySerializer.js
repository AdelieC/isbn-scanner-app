import Author from '../../objects/Author';

const getThumbnailUrl = (coverId) => {
    return process.env.REACT_APP_OPEN_LIBRARY_COVERS_URL + '/' + coverId + '-L.jpg';
};

const serializeOpenLibraryBook = (book, bookData) => {
    const details = bookData?.details;
    book.isbn = book.isbn || (details?.isbn_10 ? details.isbn_10[0] : '');
    book.ean = book.ean || (details?.isbn_13 ? details.isbn_13[0] : '');

    const description = details?.description;
    if (description) {
        book.synopsis = book.synopsis || description?.value;
    }

    addOpenLibAuthorsData(book, details?.authors);
    addImageUrl(book, details?.covers);
    addCategories(book, details?.subjects);
    book.title = book.title || details?.title;
    book.publisher = book.publisher || details?.publishers[0];
    book.publishedAt = book.publishedAt || details?.publish_date;
    book.nbPages = book.nbPages || details?.number_of_pages;
    book.language = book.language || details?.languages?.key?.split('/').pop();
};

const addCategories = (book, categories) => {
    console.log(book.categories);
    if (categories?.length) {
        book.categories = [...book.categories, ...categories];
        console.log(book.categories);
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
