import { useSearchParams } from 'react-router-dom';
import { CLASSLIST_H1 } from '../services/globals/classlists';
import WorkInProgress from '../components/reused/WorkInProgress';
import { useTranslation } from 'react-i18next';

SearchResultsPage.propTypes = {};

function SearchResultsPage(props) {
    const { t } = useTranslation(['search-results']);
    const [searchParams] = useSearchParams();
    const author = searchParams.get('author');
    const isbn = searchParams.get('isbn');
    const title = searchParams.get('title');

    return (
        <div className="grow flex flex-col gap-4 p-4 sm:p-8">
            <h1 className={CLASSLIST_H1 + 'text-secondaryDark'}>Results for</h1>
            <ul className="font-heading text-base text-primaryDark list-disc">
                <li>Author = {author || 'empty'}</li>
                <li>ISBN = {isbn || 'empty'}</li>
                <li>Title = {title || 'empty'}</li>
            </ul>
            <WorkInProgress />
        </div>
    );
}

export default SearchResultsPage;
