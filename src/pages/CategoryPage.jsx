//libraries
import { useOutletContext, useParams } from 'react-router-dom';
import { useEffect } from 'react';

//services
import useCategory from '../services/hooks/useCategory';

//components
import BookThumbnail from '../components/reused/BookThumbnail';
import ActionButton from '../components/reused/ActionButton';
import { BiAddToQueue } from 'react-icons/bi';
import { CLASSLIST_H1 } from '../services/globals/classlists';
import { useTranslation } from 'react-i18next';

function CategoryPage() {
    const { t } = useTranslation('category');
    const { setTitle } = useOutletContext();
    const { category } = useParams();
    const { books, noResult, setCategory, getNextPage, hasNextPage, reset } =
        useCategory();

    useEffect(() => {
        setCategory(category);
        setTitle(category);
        return () => reset();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center p-8 gap-8">
            <h1 className={CLASSLIST_H1 + 'text-secondaryDark'}>{t('h1') + category}</h1>
            <ul className="flex flex-col gap-8 items-center justify-center list-none">
                {books?.map((book, i) => {
                    return (
                        <li className="w-full" key={book?.isbn + book?.publishedAt}>
                            <BookThumbnail book={book} />
                        </li>
                    );
                })}
            </ul>
            {hasNextPage && (
                <ActionButton
                    icon={<BiAddToQueue className="w-4 h-4" />}
                    action={getNextPage}
                    background={'bg-secondaryDark'}
                    text={t('load-more-button')}
                    textColor={'text-secondaryLight'}
                />
            )}
            {noResult && <p>{t('no-result')}</p>}
        </div>
    );
}

export default CategoryPage;
