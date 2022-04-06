const openLibraryConfig = {
    method: 'GET',
};

const bookDetailsByIsbnUrl = (isbn) => {
    return (
        process.env.REACT_APP_OPEN_LIBRARY_BOOK_URL +
        '?bibkeys=ISBN:' +
        isbn +
        '&jscmd=details&format=json'
    );
};
const bookDetailsByIdUrl = (id) => {
    return (
        process.env.REACT_APP_OPEN_LIBRARY_BOOK_URL +
        '?bibkeys=OLID:' +
        id +
        '&jscmd=details&format=json'
    );
};

const authorDetailsUrl = (id) => {
    return process.env.REACT_APP_OPEN_LIBRARY_AUTHORS_URL + '/' + id + '.json';
};

const fetchBookDetails = async (isbn) => {
    try {
        const data = await fetch(bookDetailsByIsbnUrl(isbn), openLibraryConfig);
        return data.ok
            ? data.json().then((res) => (res.length ? res['ISBN:' + isbn] : []))
            : [];
    } catch (e) {
        return [];
    }
};

const fetchBookDetailsById = async (id) => {
    try {
        const data = await fetch(bookDetailsByIdUrl(id), openLibraryConfig);
        return data.ok
            ? data.json().then((res) => (res.length ? res['OLID:' + id] : []))
            : [];
    } catch (e) {
        return [];
    }
};

const fetchAuthorDetails = async (id) => {
    const data = await fetch(authorDetailsUrl(id), openLibraryConfig);
    return data.ok ? data.json().then((res) => res) : [];
};

export { fetchBookDetails, fetchAuthorDetails };
