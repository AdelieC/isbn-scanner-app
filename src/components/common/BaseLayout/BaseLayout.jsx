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
            <Outlet />
            <Footer />
        </>
    );
}

BaseLayout.propTypes = {};

export default BaseLayout;
