const googleApiConfig = {
    method: 'GET',
};

const bookDetailsUrl = (id) => {
    return process.env.REACT_APP_GOOGLE_BOOKS_BASE_URL + '/' + id + '?projection=full';
};

const bookIdUrl = (isbn) => {
    return (
        process.env.REACT_APP_GOOGLE_BOOKS_BASE_URL +
        '?q=isbn:' +
        isbn +
        '&projection=lite'
    );
};

const booksCategoryUrl = (category, startIndex) => {
    return (
        process.env.REACT_APP_GOOGLE_BOOKS_BASE_URL +
        '?q=subject:' +
        category +
        '&projection=full&printType=books&orderBy=relevance&maxResults=40&startIndex=' +
        startIndex
    );
};

const fetchBookId = async (isbn) => {
    const data = await fetch(bookIdUrl(isbn), googleApiConfig);
    return data.ok
        ? data.json().then((res) => (res?.items?.length ? res?.items[0]?.id : null))
        : null;
};

const fetchBookDetails = async (id) => {
    const data = await fetch(bookDetailsUrl(id), googleApiConfig);
    return data.ok ? data.json().then((res) => (res?.volumeInfo ? res : [])) : [];
};

const fetchBooksByCategory = async (category, startIndex = 0) => {
    const data = await fetch(booksCategoryUrl(category, startIndex), googleApiConfig);
    return data.ok ? data.json().then((res) => (res?.items ? res : [])) : [];
};

export { fetchBookDetails, fetchBookId, fetchBooksByCategory };
