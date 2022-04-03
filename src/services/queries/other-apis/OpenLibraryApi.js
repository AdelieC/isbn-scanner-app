const openLibraryConfig = {
    method: 'GET',
};

const bookDetailsUrl = (isbn) => {
    return (
        process.env.REACT_APP_OPEN_LIBRARY_BASE_URL +
        '?bibkeys=ISBN:' +
        isbn +
        '&jscmd=details&format=json'
    );
};

const authorDetailsUrl = (id) => {
    return process.env.REACT_APP_OPEN_LIBRARY_AUTHORS_URL + '/' + id + '.json';
};

const fetchBookDetails = async (isbn) => {
    try {
        const data = await fetch(bookDetailsUrl(isbn), openLibraryConfig);
        return data.ok ? data.json().then((res) => res['ISBN:' + isbn]) : [];
    } catch (e) {
        return [];
    }
};

const fetchAuthorDetails = async (id) => {
    const data = await fetch(authorDetailsUrl(id), openLibraryConfig);
    return data.ok ? data.json().then((res) => res) : [];
};

export { fetchBookDetails, fetchAuthorDetails };
