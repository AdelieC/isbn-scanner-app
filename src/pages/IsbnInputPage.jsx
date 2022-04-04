//libraries

import { useForm } from 'react-hook-form';
import { BiSearchAlt2 } from 'react-icons/bi';
import BookThumbnail from '../components/reused/BookThumbnail';
import BaseModal from '../components/common/modals/BaseModal';
import useIsbn from '../services/hooks/useIsbn';
import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const PLACEHOLDER = 'Enter an ISBN or EAN number...';
const TITLE = 'ISBN input';

function IsbnInputPage(props) {
    const { setTitle } = useOutletContext();

    const { register, handleSubmit, reset } = useForm();
    const { noResult, book, setIsbn, reset: resetIsbn } = useIsbn();
    const onSubmit = (data) => {
        resetIsbn();
        setIsbn(data.isbn);
    };

    useEffect(() => {
        setTitle(TITLE);
    }, []);

    useEffect(() => {
        if (book?.title) {
            reset();
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
                    {...register('isbn', {})}
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
                <BaseModal>
                    <p>Le livre n&apos;a pas été trouvé</p>
                </BaseModal>
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
