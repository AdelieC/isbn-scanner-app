//libraries
import { useThemeContext } from '../../../services/providers/ThemeProvider';
import NavBar from './NavBar';

function Header(props) {
    const { theme } = useThemeContext();

    return (
        <header
            className={
                'fixed top-0 right-0 p-4 bg-' +
                theme.secondaryBgColor +
                ' text-' +
                theme.secondaryTextColor
            }
        >
            <h1 id="title">Isbn Scanner</h1>
            <NavBar />
        </header>
    );
}

Header.propTypes = {};

export default Header;
