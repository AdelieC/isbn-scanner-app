//libraries

function Footer(props) {
    return (
        <footer className="w-full text-center text-primaryDark">
            <p>Isbn Scanner 2022</p>
            <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
                <img
                    alt="Creative Commons License"
                    style="border-width:0"
                    src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png"
                />
            </a>
            This work is licensed under a{' '}
            <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
                Creative Commons Attribution-NonCommercial 4.0 International License
            </a>
            .
        </footer>
    );
}

Footer.propTypes = {};

export default Footer;
