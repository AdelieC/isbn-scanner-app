//libraries

//services
import useToggle from '../../../services/hooks/useToggle';

//components
import { CgMenuRight, CgMenuRightAlt } from 'react-icons/cg';
import AnimatedLink from '../../reused/AnimatedLink';
import { MdHome, MdInfo } from 'react-icons/md';
import { BiBarcodeReader, BiSearchAlt2 } from 'react-icons/bi';
import { BsInputCursorText } from 'react-icons/bs';
import IconButton from '../../reused/IconButton';

const NAVLINKS = [
    {
        link: '/home',
        name: 'Home',
        icon: <MdHome className="w-10 h-10" />,
    },
    {
        link: '/input',
        name: 'Enter an ISBN',
        icon: <BsInputCursorText className="w-10 h-10" />,
    },
    {
        link: '/scan',
        name: 'Scan a barcode',
        icon: <BiBarcodeReader className="w-10 h-10" />,
    },
    {
        link: '/search/form',
        name: 'Search in books',
        icon: <BiSearchAlt2 className="w-10 h-10" />,
    },
    {
        link: '/about',
        name: 'About us',
        icon: <MdInfo className="w-10 h-10" />,
    },
];

function NavBar() {
    const { isOn, toggle } = useToggle();
    return (
        <>
            <IconButton
                callback={toggle}
                color={isOn ? 'text-tertiaryDark' : 'text-primaryLight'}
                icon={
                    isOn ? (
                        <CgMenuRight className="w-12 h-12" />
                    ) : (
                        <CgMenuRightAlt className="w-12 h-12 z-50" />
                    )
                }
            />
            <nav
                className={
                    'fixed h-screen w-screen top-0 bg-primaryLight text-tertiaryDark py-12' +
                    (isOn ? ' _animate-slide-left' : ' _animate-slide-right')
                }
            >
                <ul className="w-full h-full font-heading text-3xl flex flex-col text-center justify-between items-stretch">
                    <h2 className="text-7xl text-secondaryDark">MENU</h2>
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
