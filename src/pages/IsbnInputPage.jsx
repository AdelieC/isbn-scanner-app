//libraries

import { useForm } from 'react-hook-form';
import useIsbn from '../services/hooks/useIsbn';
import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi';
import BookThumbnail from '../components/reused/BookThumbnail';
import NoResultModal from '../components/common/modals/NoResultModal';

const PLACEHOLDER = 'Enter an ISBN or EAN number...';
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
        <div className="my-12 flex flex-col items-center grow gap-8 w-10/12 max-w-4xl bg-primaryLight shadow-xl rounded-xl p-12">
            <h2 className="text-secondaryDark text-4xl text-center font-heading">
                Search by ISBN/EAN
            </h2>
            <form className="flex gap-2 items-center" onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="font-heading rounded-md shadow-md bg-secondaryLight w-96 w-max-5xl px-4 py-2"
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
                    className="flex gap-2 justify-center items-center px-4 py-2 font-heading rounded-lg shadow-lg text-successLight bg-secondaryDark"
                    type="submit"
                >
                    <BiSearchAlt2 className="w-8 h-8" />
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
                <div className="text-primaryDark font-heading my-auto">
                    Search results will appear here...
                </div>
            )}
        </div>
    );
}

IsbnInputPage.propTypes = {};

export default IsbnInputPage;
