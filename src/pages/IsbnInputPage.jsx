//libraries

import { useForm } from 'react-hook-form';
import useIsbn from '../services/hooks/useIsbn';
import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { BiReset, BiSearchAlt2 } from 'react-icons/bi';
import BaseModal from '../components/common/modals/BaseModal';
import ActionButton from '../components/reused/ActionButton';
import BookThumbnail from '../components/reused/BookThumbnail';

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
                <BaseModal>
                    <h3 className="text-alertDark text-4xl font-heading">Sorry...</h3>
                    <div className="w-28 text-alertDark">
                        <svg
                            className="fill-current"
                            width="100%"
                            version="1.1"
                            viewBox="0 0 50 54.325"
                            xmlSpace="preserve"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g transform="translate(0 9.6506)">
                                <path d="m48.336 7.54c-0.701 0-1.359 7e-3 -2.018 0.024v-2.238h-0.734c-14.262 0-19.043 3.411-20.585 5.252-1.542-1.841-6.323-5.252-20.585-5.252h-0.734v2.237c-0.658-0.018-1.316-0.023-2.016-0.023h-1.664v32.35h1.664c17.595 0 21.186 4.035 21.698 4.784h3.302c0.557-0.784 4.218-4.784 21.673-4.784h1.663v-32.35zm-24.437 30.891c-2.457-1.812-7.611-3.914-18.383-4.054v-27.202c15.087 0.194 18.001 4.327 18.383 5zm20.585-4.054c-10.772 0.14-15.926 2.24-18.383 4.054v-26.247c0.416-0.737 3.412-4.814 18.383-5.007z" />
                            </g>

                            <g transform="translate(-3.4843 11.063)">
                                <path d="m28.654-9.0941q-0.375 0-0.75-0.21094-0.35156-0.21094-0.35156-0.72656 0-0.53906 0.16406-0.79688 0.46875-0.23438 1.1719-0.23438 1.4062 0 3 1.2422 1.6172 1.2422 1.6172 3.0938 0 1.2188-0.53906 2.0391-0.51562 0.79688-1.8281 1.5469-0.49219 0.28125-1.125 0.77344-0.60938 0.49219-0.70312 0.67969-0.23438 0.42188-0.23438 1.6172 0 0.30469-0.46875 0.30469-0.30469 0-0.30469-0.1875 0-0.30469-0.02344-1.0781 0-0.79688 0-1.125 0-0.28125 0.02344-0.51562 0.04687-0.25781 0.14062-0.46875 0.09375-0.23438 0.14062-0.39844 0.07031-0.16406 0.25781-0.35156 0.1875-0.1875 0.23438-0.28125 0.07031-0.09375 0.30469-0.25781 0.25781-0.16406 0.30469-0.21094 0.04687-0.046875 0.30469-0.21094 0.28125-0.1875 0.30469-0.1875 0.58594-0.375 0.82031-0.53906 0.25781-0.16406 0.60938-0.44531 0.35156-0.30469 0.46875-0.5625 0.14062-0.28125 0.14062-0.58594 0-1.0078-0.58594-1.5469-0.5625-0.53906-1.3125-0.53906-0.70312 0-1.125 0.09375-0.42188 0.070312-0.65625 0.070312zm-0.84375 13.008q-0.39844-0.42188-0.39844-0.98438t0.39844-0.9375q0.39844-0.39844 0.96094-0.39844t0.96094 0.39844q0.39844 0.375 0.39844 0.9375t-0.39844 0.98438q-0.39844 0.39844-0.96094 0.39844t-0.96094-0.39844z" />
                            </g>
                        </svg>
                    </div>
                    <p>
                        There was no book found with an ISBN matching {getValues('isbn')}
                    </p>
                    <ActionButton
                        icon={<BiReset className="w-4 h-4" />}
                        textColor={'text-successLight'}
                        text={'Try again'}
                        action={resetSearch}
                        background={'bg-successDark'}
                    />
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
