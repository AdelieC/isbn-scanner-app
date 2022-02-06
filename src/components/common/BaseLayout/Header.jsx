//libraries
import NavBar from './NavBar';

//stylesheets
import './Header.css';

function Header(props) {
    return (
        <header className="fixed z-50 top-0 left-0 w-full flex items-center justify-between gap-4 shadow-xl p-4 bg-primaryLight text-primaryDark dark:bg-primaryDark dark:text-primaryLight">
            <h1 className="text-3xl font-heading">Isbn-Scanner</h1>
            <h2 id="title" className="text-2xl font-heading self-center" />
            <NavBar />
        </header>
    );
}

Header.propTypes = {};

export default Header;
