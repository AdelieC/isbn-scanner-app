//libraries
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HeaderMargin from './HeaderMargin';

//services

//components

function BaseLayout() {
    return (
        <>
            <Header />
            <main className="grow w-full flex flex-col items-center">
                <HeaderMargin />
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

BaseLayout.propTypes = {};

export default BaseLayout;
