//libraries
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const dark = {
        primaryBgColor: 'gray-800',
        secondaryBgColor: 'gray-600',
        primaryTextColor: 'white',
        secondaryTextColor: 'white',
    };

    const light = {
        primaryBgColor: 'white',
        secondaryBgColor: 'gray-400',
        primaryTextColor: 'gray-800',
        secondaryTextColor: 'white',
    };

    const [theme, setTheme] = useState(light);

    const switchCurrentTheme = () => {
        setTheme(theme === light ? dark : light);
    };

    return (
        <ThemeContext.Provider
            value={{
                theme: theme,
                switchCurrentTheme: switchCurrentTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

ThemeProvider.propTypes = {
    children: PropTypes.node,
};

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeProvider;
