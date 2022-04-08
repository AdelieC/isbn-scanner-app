import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// the locales
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const defaultOptions = {
    fallbackLng: 'en',
    /*ns: [
		'errors',
		'routes',
		'about',
		'header',
		'footer',
		'home',
		'scanner',
		'search-form',
		'search-results',
	],*/
    ns: ['routes'],
    debug: true,
    interpolation: {
        escapeValue: false, // not needed for react!!
    },
    react: {
        useSuspense: true,
    },
};

i18next
    .use(Backend)
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(detector)
    .init(defaultOptions);

export default i18next;
