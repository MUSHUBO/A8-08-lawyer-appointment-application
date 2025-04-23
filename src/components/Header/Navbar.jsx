import React from 'react';
import navbarImg from '../../assets/logo.png'

const Navbar = () => {

    const links = <>
        <li>Home</li>
        <li>My-Bookings</li>
        <li>Blogs</li>
        <li>Contact Us</li>
    </>

    return (
        <div className="navbar w-full lg:w-10/12 mx-auto border-b border-gray-200 pr-6 lg:p-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content 
                        bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className='flex gap-1 lg:gap-4'>
                    <img src={navbarImg} alt="" className='w-10 h-10'/>
                    <h3 className='font-extrabold text-2xl'>Law.BD</h3>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-12 font-medium">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn bg-[#0EA106] text-white font-bold rounded-full px-6">Contact Now</button>
            </div>
        </div>
    );
};

export default Navbar;