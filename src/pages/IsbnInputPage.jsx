//libraries

import { useForm } from 'react-hook-form';
import useIsbn from '../services/hooks/useIsbn';
import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import BookThumbnail from '../components/reused/BookThumbnail';
import NoResultModal from '../components/common/modals/NoResultModal';
import { ICON_SEARCH_BUTTON } from '../services/globals/icons';

const PLACEHOLDER = 'Ex : 0061478784';
const TITLE = 'ISBN input';

function IsbnInputPage(props) {
    const { setTitle } = useOutletContext();
    const { register, handleSubmit, reset: resetForm, getValues } = useForm();
    const { noResult, book, setIsbn, reset: resetSearch } = useIsbn();

    const onSubmit = (data) => {
        resetSearch();
        setIsbn(data.isbn);
    };

    useEffect(() => {
        setTitle(TITLE);
    }, []);

    useEffect(() => {
        if (book?.title || noResult) {
            resetForm();
        }
    }, [book]);

    return (
        <div className="sm:my-12 flex flex-col items-center grow gap-8 w-full sm:w-10/12 max-w-4xl bg-primaryLight sm:shadow-xl sm:rounded-xl p-8 sm:p-12">
            <h2 className="text-secondaryDark text-2xl sm:text-4xl text-center font-heading">
                Search by ISBN/EAN
            </h2>
            <form
                className="flex flex-col sm:flex-row justify-center gap-2 items-center text-base sm:text-xl"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    className="font-heading rounded-md shadow-md bg-secondaryLight w-full sm:w-96 w-max-5xl px-4 py-2"
                    type="text"
                    placeholder={PLACEHOLDER}
                    name="isbn"
                    {...register('isbn', {
                        required:
                            'You can find the ISBN or EAN number at the back or the book.',
                        pattern: {
                            value: /^(97)?[\d\-? ?]{9,15}(\d|X)$/,
                            message:
                                'Please enter a valid number either 10 or 14 digits long.',
                        },
                    })}
                />
                <button
                    className="flex gap-2 justify-center items-center px-4 py-2 font-heading rounded-lg shadow-lg text-successLight bg-primaryDark"
                    type="submit"
                >
                    {ICON_SEARCH_BUTTON}
                    Search
                </button>
            </form>
            {noResult ? (
                <NoResultModal
                    callback={resetSearch}
                    text={
                        'There was no book found with an ISBN matching ' +
                        getValues('isbn')
                    }
                />
            ) : book?.title ? (
                <BookThumbnail book={book} />
            ) : (
                <div className="text-center text-base sm:text-xl text-primaryDark font-heading my-auto">
                    Search results will appear here...
                </div>
            )}
        </div>
    );
}

IsbnInputPage.propTypes = {};

export default IsbnInputPage;
