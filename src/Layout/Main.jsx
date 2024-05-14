import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    const location=useLocation();
    const noHeaderFooter=location.pathname.includes('logIn') || location.pathname.includes('register')
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}

    <div className=''>
    <Outlet></Outlet>
  
    </div>
    {noHeaderFooter || <Footer></Footer>}

        </div>
    );
};

export default Main;