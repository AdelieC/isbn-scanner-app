//libraries
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

//services
import { CLASSLIST_H1 } from '../services/globals/classlists';

//components
import WorkInProgress from '../components/reused/WorkInProgress';

function SearchResultsPage() {
    const { t } = useTranslation('search-results');
    const { setTitle } = useOutletContext();
    const [searchParams] = useSearchParams();
    const author = searchParams.get('author');
    const isbn = searchParams.get('isbn');
    const title = searchParams.get('title');

    useEffect(() => {
        setTitle(t('page-title'));
    }, []);

    return (
        <div className="grow flex flex-col gap-4 p-4 sm:p-8">
            <h1 className={CLASSLIST_H1 + 'text-secondaryDark'}>{t('h1')}</h1>
            <ul className="font-heading text-base text-primaryDark list-disc">
                <li>
                    {t('author')} = {author || t('empty-field')}
                </li>
                <li>ISBN = {isbn || t('empty-field')}</li>
                <li>
                    {t('title')} = {title || t('empty-field')}
                </li>
            </ul>
            <WorkInProgress />
        </div>
    );
}

export default SearchResultsPage;
