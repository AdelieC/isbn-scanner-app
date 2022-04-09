//libraries

//services
import useToggle from '../../../services/hooks/useToggle';

//components
import AnimatedLink from '../../reused/AnimatedLink';
import IconButton from '../../reused/IconButton';
import {
    ICON_HOME,
    ICON_INFO,
    ICON_INPUT,
    ICON_MENU_CLOSE,
    ICON_MENU_OPEN,
    ICON_SCANNER,
    ICON_SEARCH,
} from '../../../services/globals/icons';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const NAVLINKS = [
    {
        link: '/',
        name: 'Home',
        icon: ICON_HOME,
    },
    {
        link: i18next.t('routes:input-path'),
        name: 'Enter an ISBN',
        icon: ICON_INPUT,
    },
    {
        link: i18next.t('routes:scan-path'),
        name: 'Scan a barcode',
        icon: ICON_SCANNER,
    },
    {
        link: i18next.t('routes:search-form'),
        name: 'Search in books',
        icon: ICON_SEARCH,
    },
    {
        link: i18next.t('routes:about'),
        name: 'About us',
        icon: ICON_INFO,
    },
];

function NavBar() {
    const { t } = useTranslation('header');
    const { isOn, toggle } = useToggle();
    return (
        <>
            <IconButton
                callback={toggle}
                color={isOn ? 'text-primaryDark' : 'text-primaryLight'}
                icon={isOn ? ICON_MENU_OPEN : ICON_MENU_CLOSE}
            />
            <nav
                className={
                    'fixed h-screen w-screen top-0 bg-primaryLight text-primaryDark py-12' +
                    (isOn ? ' _animate-slide-left' : ' _animate-slide-right')
                }
            >
                <ul className="w-full h-full font-heading text-2xl sm:text-3xl flex flex-col text-center justify-between items-stretch">
                    <h2 className="text-5xl sm:text-6xl md:text-7xl text-secondaryDark">
                        {t('menu-title')}
                    </h2>
                    {NAVLINKS.map((link) => {
                        return (
                            <li key={link.name} onClick={toggle}>
                                <AnimatedLink
                                    to={link.link}
                                    name={link.name}
                                    icon={link.icon}
                                />
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}

export default NavBar;
