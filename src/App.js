//libraries
import { Route, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

//services
import ThemeProvider from './services/providers/ThemeProvider';
import StatusProvider from './services/providers/StatusProvider';

//components
import BaseLayout from './components/common/BaseLayout/BaseLayout';
import HomePage from './pages/HomePage';
import TitleProvider from './services/providers/TitleProvider';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            //TODO : add options here
        },
    },
});

function App() {
    return (
        <TitleProvider>
            <ThemeProvider>
                <QueryClientProvider client={queryClient}>
                    <StatusProvider>
                        <Routes>
                            <Route path="/" element={<BaseLayout />}>
                                <Route path="home" element={<HomePage />} />
                            </Route>
                        </Routes>
                    </StatusProvider>
                    <ReactQueryDevtools initialisOpen />
                </QueryClientProvider>
            </ThemeProvider>
        </TitleProvider>
    );
}

export default App;
