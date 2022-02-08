import { useQuery, useQueryClient } from 'react-query';
import { searchByIsbn } from '../queries/local-api/BookQueries';
import {
    searchInGoogleBooks,
    searchInOpenLibrary,
} from '../queries/other-apis/IsbnQueries';

const BOOK_STRUCTURE = [
    'title',
    'authors',
    'publishers',
    'language',
    'publishedAt',
    'nbPages',
    'format',
    'synopsis',
    'image',
    'isbn',
    'ean',
];

const handleGoogleResult = (res) => {
    //todo: format book
    return {};
};

const handleOpenLibraryResult = (res) => {
    //todo: format book && add missing infos && create book
    return {};
};

function useIsbn(isbn) {
    const queryClient = useQueryClient();
    const { data: localBook } = useQuery(
        ['findIsbnInLocalApi', isbn],
        () => searchByIsbn(isbn),
        {
            select: (data) => {
                if (data.title) queryClient.cancelQueries('findIsbnInGoogleApi');
            },
        }
    );
    const { data: googleBook } = useQuery(
        ['findIsbnInGoogleApi', isbn, localBook],
        () => searchInGoogleBooks(isbn),
        {
            select: (data) => {
                return handleGoogleResult(data);
            },
        }
    );
    const { data: openLibraryBook } = useQuery(
        ['findIsbnInOpenLibraryApi', isbn, googleBook],
        () => searchInOpenLibrary(isbn),
        {
            select: (data) => {
                return handleOpenLibraryResult(data);
            },
        }
    );

    return {
        bookFound: openLibraryBook || localBook,
        hasNoResult: openLibraryBook === {},
    };
}

useIsbn.propTypes = {};

export default useIsbn;
