const googleApiConfig = {
    method: 'GET',
};

const bookDetailsUrl = (id) => {
    return process.env.REACT_APP_GOOGLE_BOOKS_BASE_URL + '/' + id;
};

const bookIdUrl = (isbn) => {
    return (
        process.env.REACT_APP_GOOGLE_BOOKS_BASE_URL +
        '?q=isbn:' +
        isbn +
        '&projection=lite'
    );
};

const fetchBookId = async (isbn) => {
    const data = await fetch(bookIdUrl(isbn), googleApiConfig);
    return data.ok
        ? data.json().then((res) => (res?.items?.length ? res?.items[0]?.id : ''))
        : '';
};

const fetchBookDetails = async (id) => {
    const data = await fetch(bookDetailsUrl(id), googleApiConfig);
    return data.ok ? data.json().then((res) => res) : '';
};

export { fetchBookDetails, fetchBookId };
