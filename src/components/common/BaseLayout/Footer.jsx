//libraries

//components
import {
    FaCreativeCommons,
    FaCreativeCommonsBy,
    FaCreativeCommonsNc,
} from 'react-icons/fa';

const ICONS_CLASSLIST = 'h-4 w-4 md:h-6 md:w-6';
const VERSION = process.env.REACT_APP_VERSION_NB;
const YEAR = new Date().getFullYear();

function Footer() {
    return (
        <footer className="bg-primaryDark w-screen flex gap-4 px-8 py-4 justify-center text-sm sm:text-md items-center text-center text-primaryLight font-heading text-xl">
            <h4 className="">
                Isbn Scanner {YEAR} v-{VERSION}
            </h4>
            <a
                className="flex gap-2"
                rel="license"
                href="https://creativecommons.org/licenses/by-nc/4.0/"
            >
                <FaCreativeCommons className={ICONS_CLASSLIST} />
                <FaCreativeCommonsBy className={ICONS_CLASSLIST} />
                <FaCreativeCommonsNc className={ICONS_CLASSLIST} />
            </a>
            <span className="hidden">
                This work is licensed under a
                <a rel="license" href="https://creativecommons.org/licenses/by-nc/4.0/">
                    Creative Commons Attribution-NonCommercial 4.0 International License
                </a>
            </span>
        </footer>
    );
}

Footer.propTypes = {};

export default Footer;
