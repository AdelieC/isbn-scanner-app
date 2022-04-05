import Author from '../../objects/Author';

const serializeGoogleBook = (book, bookData) => {
    try {
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
        addCategories(book, volumeInfo?.categories);
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
    } catch (e) {
        console.error(e);
    }
};

const addCategories = (book, categories) => {
    console.log(book.categories);
    if (categories?.length) {
        categories.map((category) => {
            if (!book.categories.includes(category)) book.categories.push(category);
        });
    }
    console.log(book.categories);
};

const addDimensions = (book, initialArray) => {
    book.dimensions.height = initialArray?.height;
    book.dimensions.width = initialArray?.width;
    book.dimensions.thickness = initialArray?.thickness;
};

const addAuthor = (book, name) => {
    if (!authorExists(book?.authors, name?.toUpperCase())) {
        const author = new Author();
        const nameArray = name.toUpperCase().split(' ');
        author.firstName = nameArray.shift();
        author.lastName = nameArray.join(' ');
        book.authors.push(author);
    }
};

const authorExists = (authors, author) => {
    return authors?.some((existingAuthor) => author?.includes(existingAuthor.lastName));
};

export { serializeGoogleBook };
