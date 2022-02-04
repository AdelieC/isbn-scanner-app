//libraries

import { useThemeContext } from '../../../services/providers/ThemeProvider';

function Footer(props) {
    const { theme } = useThemeContext();
    return (
        <footer className={'w-full text-center text-' + theme.primaryTextColor}>
            Isbn Scanner 2022
        </footer>
    );
}

Footer.propTypes = {};

export default Footer;
