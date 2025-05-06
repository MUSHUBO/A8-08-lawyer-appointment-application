import React, { useEffect } from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet, useLocation, useNavigation } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {

    const navigation = useNavigation();

    // Using useLocation hook to detect route change
    const location = useLocation();

    useEffect(() => {
        // Scroll to the top whenever the route changes
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);

    return (
        <div>
            <Navbar></Navbar>
            {navigation.state === 'loading' && (
                <div className="flex justify-center mt-52">
                    <span className="loading loading-dots loading-xl text-primary"></span>
                </div>
            )}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;