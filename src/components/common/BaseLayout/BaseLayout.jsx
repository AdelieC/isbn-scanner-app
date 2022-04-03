//libraries
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HeaderMargin from './HeaderMargin';
import { useState } from 'react';

//services

//components

function BaseLayout() {
    const [title, setTitle] = useState('ISBN Scanner');
    return (
        <>
            <Header title={title} />
            <main className="grow w-full flex flex-col items-center">
                <HeaderMargin />
                <Outlet context={{ setTitle }} />
            </main>
            <Footer />
        </>
    );
}

BaseLayout.propTypes = {};

export default BaseLayout;
