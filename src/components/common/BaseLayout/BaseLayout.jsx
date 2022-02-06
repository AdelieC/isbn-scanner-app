//libraries
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

//services

//components

function BaseLayout(props) {
    return (
        <>
            <Header />
            <main className="flex flex-col items-center p-16">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

BaseLayout.propTypes = {};

export default BaseLayout;
