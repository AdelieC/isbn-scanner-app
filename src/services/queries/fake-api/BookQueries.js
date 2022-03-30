import { get } from './BaseQueries';

const searchByIsbn = async (isbn) => {
    const books = await getBooks();
    let res = {};
    books?.map((book) => {
        if (isbn === (book.isbn || book.ean)) res = book;
    });
    return res;
};

const addBook = (book) => {};

const getBooks = (searchData) => {
    return get(process.env.REACT_APP_BOOKS_PATH);
};

export { searchByIsbn, getBooks, addBook };
