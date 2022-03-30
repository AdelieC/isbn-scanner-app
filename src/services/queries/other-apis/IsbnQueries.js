const searchInGoogleBooks = (isbn) => {
    return fetch(process.env.REACT_APP_GOOGLE_BOOKS_BASE_URL + '?q=isbn:' + isbn);
};

const searchInOpenLibrary = (isbn) => {
    const key = 'ISBN:' + isbn;
    return fetch(
        process.env.REACT_APP_OPEN_LIBRARY_BASE_URL +
            '?bibkeys=' +
            key +
            '&format=json&jscmd=details'
    );
};

export { searchInGoogleBooks, searchInOpenLibrary };
