//libraries

import {
    FaCreativeCommons,
    FaCreativeCommonsBy,
    FaCreativeCommonsNc,
} from 'react-icons/fa';

function Footer(props) {
    return (
        <footer className="bg-secondaryLight flex gap-4 px-8 py-4 justify-center items-center w-full text-center text-primaryDark dark:text-primaryLight dark:bg-tertiaryDark font-heading text-xl">
            <h4>Isbn Scanner 2022</h4>
            <a
                className="flex gap-2"
                rel="license"
                href="https://creativecommons.org/licenses/by-nc/4.0/"
            >
                <FaCreativeCommons className="h-8 w-8" />
                <FaCreativeCommonsBy className="h-8 w-8" />
                <FaCreativeCommonsNc className="h-8 w-8" />
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
