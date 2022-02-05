//libraries

//services

//components
import ToggleIconButton from '../../reused/ToggleIconButton';
import { useState } from 'react';
import { CgMenuRight, CgMenuRightAlt } from 'react-icons/cg';
import { Link } from 'react-router-dom';

function NavBar(props) {
    const [isToggled, setIsToggled] = useState(false);
    return (
        <>
            <nav
                className={
                    'fixed h-screen w-screen top-0 bg-primaryDark text-primaryLight p-16' +
                    (isToggled ? ' _animate-slide-left' : ' _animate-slide-right')
                }
            >
                <ul className="w-full h-full font-heading text-3xl flex flex-col justify-between items-center">
                    <h2 className="text-6xl">Menu</h2>
                    <li>
                        <Link to={'/home'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/input'}>Enter an ISBN</Link>
                    </li>
                    <li>
                        <Link to={'/scan'}>Scan a barcode</Link>
                    </li>
                    <li>
                        <Link to={'/search/form'}>Search in books</Link>
                    </li>
                </ul>
            </nav>
            <ToggleIconButton
                isToggled={isToggled}
                setIsToggled={setIsToggled}
                icon1={<CgMenuRight className="w-10 h-10" />}
                icon2={<CgMenuRightAlt className="w-10 h-10 z-50" />}
                color1={'primaryDark'}
                color2={'primaryLight'}
            />
        </>
    );
}

NavBar.propTypes = {};

export default NavBar;
