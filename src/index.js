import './i18n';
import * as ReactDOM from 'react-dom';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import FullLoader from './components/common/loaders/FullLoader';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/serviceWorker.js').then(
            function (registration) {
                console.debug(
                    'ServiceWorker registration successful with scope: ',
                    registration.scope
                );
            },
            (err) => {
                console.debug('ServiceWorker registration failed: ', err);
            }
        );
    });
}

ReactDOM.render(
    <Suspense fallback={<FullLoader />}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Suspense>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
