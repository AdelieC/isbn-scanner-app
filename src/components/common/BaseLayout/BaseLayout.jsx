//libraries
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

//services

//components

function BaseLayout(props) {
    return (
        <div className={'min-h-screen'}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

BaseLayout.propTypes = {};

export default BaseLayout;
