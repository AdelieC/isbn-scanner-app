//libraries
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { createSearchParams, useNavigate, useOutletContext } from 'react-router-dom';

//services
import { ICON_SEARCH_BUTTON } from '../services/globals/icons';

const ISBN_PLACEHOLDER = 'Ex : 0061478784';
const AUTHOR_PLACEHOLDER = 'Ex : Wynne Jones';
const TITLE_PLACEHOLDER = 'Ex : Moving castle';

const TITLE = 'Advanced search';

function SearchFormPage() {
    const { setTitle } = useOutletContext();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        navigate({
            pathname: '/search/results',
            search: `?${createSearchParams(data)}`,
        });
    };

    useEffect(() => {
        setTitle(TITLE);
    }, []);

    return (
        <div className="sm:my-12 flex flex-col items-center grow gap-4 w-full sm:w-10/12 max-w-4xl bg-primaryLight sm:shadow-xl sm:rounded-xl p-8 font-heading">
            <h2 className="text-secondaryDark text-2xl sm:text-4xl text-center font-heading">
                Search by ISBN/EAN
            </h2>
            <form
                className="w-full flex flex-col justify-center gap-4 items-center text-base sm:text-xl max-w-2xl"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex flex-col gap-2 items-start justify-between w-full">
                    <label className="text-primaryDark">ISBN/EAN :</label>
                    <input
                        className="font-heading rounded-md shadow-md bg-secondaryLight w-full px-4 py-2"
                        type="text"
                        placeholder={ISBN_PLACEHOLDER}
                        name="isbn"
                        {...register('isbn', {
                            required: false,
                            pattern: {
                                value: /^(97)?[\d\-? ?]{9,15}(\d|X)$/,
                                message:
                                    'Please enter a valid number either 10 or 14 digits long.',
                            },
                        })}
                    />
                </div>
                <div className="flex flex-col gap-2 items-start justify-between w-full">
                    <label className="text-primaryDark">Author :</label>
                    <input
                        className="font-heading rounded-md shadow-md bg-secondaryLight w-full px-4 py-2"
                        type="text"
                        placeholder={AUTHOR_PLACEHOLDER}
                        name="author"
                        {...register('author', {
                            required: false,
                            pattern: {
                                value: /^\p{L}{3,}$/u,
                                message: 'Please enter a valid name.',
                            },
                        })}
                    />
                </div>
                <div className="flex flex-col gap-2 items-start justify-between w-full">
                    <label className="text-primaryDark">Title :</label>
                    <input
                        className="font-heading rounded-md shadow-md bg-secondaryLight w-full px-4 py-2"
                        type="text"
                        placeholder={TITLE_PLACEHOLDER}
                        name="title"
                        {...register('title', {
                            required: false,
                            pattern: {
                                value: /^\p{L}{3,}$/u,
                                message: 'Please enter a valid title or part of a title.',
                            },
                        })}
                    />
                </div>
                <button
                    className="flex gap-2 justify-center items-center px-4 py-2 font-heading rounded-lg shadow-lg text-successLight bg-primaryDark mt-4"
                    type="submit"
                >
                    {ICON_SEARCH_BUTTON}
                    Search
                </button>
            </form>
        </div>
    );
}

export default SearchFormPage;
