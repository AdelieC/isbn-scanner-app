//libraries
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
    return (
        <QueryClientProvider client={queryClient}>
            <StatusProvider>
                <Routes>
                    <Route path="/" element={<BaseLayout />}>
                        <Route path="home" element={<HomePage />} />
                        <Route path="scan" element={<IsbnScannerPage />} />
                        <Route path="input" element={<IsbnInputPage />} />
                        <Route path="book/:isbn" element={<BookDetailsPage />} />
                        <Route path="category/:category" element={<CategoryPage />} />
                    </Route>
                </Routes>
            </StatusProvider>
            <ReactQueryDevtools initialisOpen />
        </QueryClientProvider>
    );
}

export default App;
