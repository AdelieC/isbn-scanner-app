//libraries

//services
import {
    ICON_LICENCE_BY,
    ICON_LICENCE_COMMONS,
    ICON_LICENCE_NC,
} from '../../../services/globals/icons';

//components

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
                {ICON_LICENCE_COMMONS}
                {ICON_LICENCE_BY}
                {ICON_LICENCE_NC}
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

export default Footer;
