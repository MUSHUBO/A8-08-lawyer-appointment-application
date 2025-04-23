import React from 'react';
import navbarImg from '../../assets/logo.png'
import { NavLink } from 'react-router';

const Navbar = () => {

    const links = <>
        <NavLink to='/'> Home </NavLink>
        <NavLink to='/booking'> My-Bookings </NavLink>
        <NavLink to='/blogs'> Blogs </NavLink>
        <NavLink to='/error'> Contact Us </NavLink>
    </>

    return (
        <div className='border border-[#0F0F0F20]'>
            <div className="navbar w-full lg:w-10/12 mx-auto  pr-6 lg:p-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-gray-600 text-white 
                        font-medium text-md text-center  space-y-2 py-8 rounded-box z-1 mt-4 ml-3 w-32 p-4 shadow-md shadow-sky-100">
                            {links}
                        </ul>
                    </div>
                    <div className='flex gap-1 lg:gap-3'>
                        <img src={navbarImg} alt="" className='w-10 h-10' />
                        <h3 className='font-bold text-3xl'>Law.BD</h3>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-12 font-medium">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn bg-[#0EA106] text-white font-bold rounded-full md:px-6">Contact Now</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;