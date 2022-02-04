//libraries
import PropTypes from 'prop-types';

//services
import { useThemeContext } from '../../services/providers/ThemeProvider';

//components

function IconButton({ callback, icon, color }) {
    const { theme } = useThemeContext();
    return (
        <button
            onClick={callback}
            className={'h-10 w-10 dropShadow text-' + (color || theme.secondaryBgColor)}
        >
            {icon}
        </button>
    );
}

IconButton.propTypes = {
    callback: PropTypes.func.isRequired,
    icon: PropTypes.element.isRequired,
    color: PropTypes.string.isRequired,
};

export default IconButton;
