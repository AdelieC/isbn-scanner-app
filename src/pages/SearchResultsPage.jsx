import { useSearchParams } from 'react-router-dom';
import { CLASSLIST_H1 } from '../services/globals/classlists';
import { ICON_WORK_IN_PROGRESS } from '../services/globals/icons';

SearchResultsPage.propTypes = {};

function SearchResultsPage(props) {
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
            <div className="flex grow flex-col justify-center items-center gap-4 text-secondaryDark">
                {ICON_WORK_IN_PROGRESS}
                <p className="font-heading text-base sm:text-xl text-primaryDark text-center">
                    This page is not ready yet. Code in progress...
                </p>
            </div>
        </div>
    );
}

export default SearchResultsPage;
