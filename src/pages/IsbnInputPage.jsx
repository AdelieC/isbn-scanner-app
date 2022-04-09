//libraries
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

//services
import useIsbn from '../services/hooks/useIsbn';
import { ICON_SEARCH_BUTTON } from '../services/globals/icons';

//components
import BookThumbnail from '../components/reused/BookThumbnail';
import NoResultModal from '../components/common/modals/NoResultModal';

function IsbnInputPage() {
    const { t } = useTranslation('search-form');
    const { setTitle } = useOutletContext();
    const { register, handleSubmit, reset: resetForm, getValues } = useForm();
    const { noResult, book, setIsbn, reset: resetSearch } = useIsbn();

    const onSubmit = (data) => {
        resetSearch();
        setIsbn(data.isbn);
    };

    useEffect(() => {
        setTitle(t('isbn-input:title'));
    }, []);

    useEffect(() => {
        if (book?.title || noResult) {
            resetForm();
        }
    }, [book]);

    return (
        <div className="sm:my-12 flex flex-col items-center grow gap-8 w-full sm:w-10/12 max-w-4xl bg-primaryLight sm:shadow-xl sm:rounded-xl p-8 sm:p-12">
            <h2 className="text-secondaryDark text-2xl sm:text-4xl text-center font-heading">
                {t('isbn-input:h1')}
            </h2>
            <form
                className="flex flex-col sm:flex-row justify-center gap-2 items-center text-base sm:text-xl"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    className="font-heading rounded-md shadow-md bg-secondaryLight w-full sm:w-96 w-max-5xl px-4 py-2"
                    type="text"
                    placeholder={t('isbn-input.placeholder')}
                    name="isbn"
                    {...register('isbn', {
                        required: t('required-message'),
                        pattern: {
                            value: /^(97)?[\d\-? ?]{9,15}(\d|X)$/,
                            message: t('isbn-input:invalid-message'),
                        },
                    })}
                />
                <button
                    className="flex gap-2 justify-center items-center px-4 py-2 font-heading rounded-lg shadow-lg text-successLight bg-primaryDark"
                    type="submit"
                >
                    {ICON_SEARCH_BUTTON}
                    {t('isbn-input:submit')}
                </button>
            </form>
            {noResult ? (
                <NoResultModal
                    callback={resetSearch}
                    text={t('no-result') + getValues('isbn')}
                />
            ) : book?.title ? (
                <BookThumbnail book={book} />
            ) : (
                <div className="text-center text-base sm:text-xl text-primaryDark font-heading my-auto">
                    {t('results-will-appear-here')}
                </div>
            )}
        </div>
    );
}

export default IsbnInputPage;
