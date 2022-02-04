//libraries
import { createContext, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

//services
import { capitalize } from '../utils/StringFunctions';

const TitleContext = createContext();

const getTitleFromPath = (pathname) => {
    return capitalize(pathname.replaceAll('-', ' ').replaceAll('/', ''));
};

function TitleProvider({ children }) {
    let title = getTitleFromPath(window.location.pathname);

    useEffect(() => {
        if (title) {
            document.title = title;
            document.getElementById('title').innerText = title;
        }
    }, [title]);

    return <TitleContext.Provider value={{}}>{children}</TitleContext.Provider>;
}

TitleProvider.propTypes = {
    children: PropTypes.node,
};

export const useTitleContext = () => useContext(TitleContext);

export default TitleProvider;
