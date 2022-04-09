//libraries
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

//services
import StatusProvider from './services/providers/StatusProvider';

//components
import BaseLayout from './components/common/BaseLayout/BaseLayout';
import HomePage from './pages/HomePage';
import IsbnScannerPage from './pages/IsbnScannerPage';
import IsbnInputPage from './pages/IsbnInputPage';
import BookDetailsPage from './pages/BookDetailsPage';
import CategoryPage from './pages/CategoryPage';
import SearchFormPage from './pages/SearchFormPage';
import SearchResultsPage from './pages/SearchResultsPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            //TODO : add options here
        },
    },
});

document
    .querySelector('body')
    .classList.add(
        'w-screen',
        'h-screen',
        'overflow-x-hidden',
        'flex',
        'flex-col',
        'items-center',
        'justify-between',
        'font-serif',
        'text-xl',
        'bg-secondaryLight',
        'dark:bg-primaryDark',
        'dark:text-primaryLight'
    );

function App() {
    const { t } = useTranslation(['routes']);
    return (
        <QueryClientProvider client={queryClient}>
            <StatusProvider>
                <Routes>
                    <Route path="/" element={<BaseLayout />}>
                        <Route path="" element={<HomePage />} />
                        <Route path={t('scan-path')} element={<IsbnScannerPage />} />
                        <Route path={t('input-path')} element={<IsbnInputPage />} />
                        <Route
                            path={t('book-path') + ':isbn'}
                            element={<BookDetailsPage />}
                        />
                        <Route
                            path={t('category-path') + ':category'}
                            element={<CategoryPage />}
                        />
                        <Route path={t('search-path')} element={<SearchFormPage />} />
                        <Route path={t('results-path')} element={<SearchResultsPage />} />
                        <Route path={t('about-path')} element={<AboutPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </StatusProvider>
            <ReactQueryDevtools initialisOpen />
        </QueryClientProvider>
    );
}

export default App;
