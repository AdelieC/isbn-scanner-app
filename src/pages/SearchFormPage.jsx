//libraries
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { createSearchParams, useNavigate, useOutletContext } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

//services
import { ICON_SEARCH_BUTTON } from '../services/globals/icons';

//components
import SubmitButton from '../components/reused/SubmitButton';

function SearchFormPage() {
    const { t } = useTranslation('search-form');
    const { setTitle } = useOutletContext();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        if (!Object.values(data).some((value) => value !== '')) return;
        navigate({
            pathname: '/' + t('routes:paths.results'),
            search: `?${createSearchParams(data)}`,
        });
    };

    useEffect(() => {
        setTitle(t('advanced.page-title'));
    }, []);

    return (
        <div className="sm:my-12 flex flex-col items-center grow gap-4 w-full sm:w-10/12 max-w-4xl bg-primaryLight sm:shadow-xl sm:rounded-xl p-8 font-heading">
            <h1 className="text-secondaryDark text-2xl sm:text-4xl text-center font-heading">
                {t('advanced.h1')}
            </h1>
            <form
                className="w-full flex flex-col justify-center gap-4 items-center text-base sm:text-xl max-w-2xl"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex flex-col gap-2 items-start justify-between w-full">
                    <label className="text-primaryDark">{t('isbn-input.label')} :</label>
                    <input
                        className="font-heading rounded-md shadow-md bg-secondaryLight w-full px-4 py-2"
                        type="text"
                        placeholder={t('isbn-input.placeholder')}
                        name="isbn"
                        {...register('isbn', {
                            required: false,
                            pattern: {
                                value: /^(97)?[\d\-? ?]{9,15}(\d|X)$/,
                                message: t('isbn-input.invalid-message'),
                            },
                        })}
                    />
                </div>
                <div className="flex flex-col gap-2 items-start justify-between w-full">
                    <label className="text-primaryDark">
                        {t('advanced.author.label')} :
                    </label>
                    <input
                        className="font-heading rounded-md shadow-md bg-secondaryLight w-full px-4 py-2"
                        type="text"
                        placeholder={t('advanced.author.placeholder')}
                        name="author"
                        {...register('author', {
                            required: false,
                            pattern: {
                                value: /^\p{L}{3,}$/u,
                                message: t('advanced.author.invalid-message'),
                            },
                        })}
                    />
                </div>
                <div className="flex flex-col gap-2 items-start justify-between w-full">
                    <label className="text-primaryDark">
                        {t('advanced.title.label')} :
                    </label>
                    <input
                        className="font-heading rounded-md shadow-md bg-secondaryLight w-full px-4 py-2"
                        type="text"
                        placeholder={t('advanced.title.placeholder')}
                        name="title"
                        {...register('title', {
                            required: false,
                            pattern: {
                                value: /^\p{L}{3,}$/u,
                                message: t('advanced.title.invalid-message'),
                            },
                        })}
                    />
                </div>
                <SubmitButton icon={ICON_SEARCH_BUTTON} text={t('submit')} />
            </form>
        </div>
    );
}

export default SearchFormPage;
