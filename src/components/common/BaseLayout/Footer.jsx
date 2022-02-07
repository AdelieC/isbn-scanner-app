//libraries

function Footer(props) {
    return (
        <footer className="bg:secondaryLight w-full text-center text-primaryDark dark:text-primaryLight dark:bg-tertiaryDark font-heading text-xl">
            <h4>Isbn Scanner 2022</h4>
            <a rel="license" href="https://creativecommons.org/licenses/by-nc/4.0/">
                C-BY-NC
            </a>
            This work is licensed under a{' '}
            <a rel="license" href="https://creativecommons.org/licenses/by-nc/4.0/">
                Creative Commons Attribution-NonCommercial 4.0 International License
            </a>
            .
        </footer>
    );
}

Footer.propTypes = {};

export default Footer;
