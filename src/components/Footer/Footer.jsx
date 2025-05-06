import React from 'react';
import logoFooter from '../../assets/logo-footer.png'
import { NavLink } from 'react-router';

const Footer = () => {

    return (
        <footer className="footer footer-horizontal footer-center bg-[#0f0f0f] text-white rounded py-16">
            <nav className='flex gap-4'>
                <img src={logoFooter} alt="" />
                <h3 className='font-extrabold text-2xl'>Law.BD</h3>
            </nav>
            <nav className="grid grid-flow-col gap-4">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/booking'>My-Bookings</NavLink>
                <NavLink to='/blogs'>Blogs</NavLink>
            </nav>
            <p className='border-b-2 border-white border-dashed my-1'></p>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.facebook.com/Sheikhshubo333/" target="_blank" rel="noopener noreferrer">
                        <img
                            className='bg-white rounded-full p-1'
                            src="https://i.ibb.co.com/N2RGrmZs/fb-thumb.png"
                            alt="Facebook"
                        />
                    </a>
                    <a href="https://github.com/MUSHUBO" target="_blank" rel="noopener noreferrer">
                        <img
                            className='bg-white rounded-full p-1'
                            src="https://i.ibb.co.com/YMkDhfz/github-thumb.png"
                            alt="GitHub"
                        />
                    </a>
                    <a href="https://www.youtube.com/@shubo4816" target="_blank" rel="noopener noreferrer">
                        <img
                            className='bg-white rounded-full p-1 py-2'
                            src="https://i.ibb.co.com/7dFZhxFG/youtube-thumb.png"
                            alt="GitHub"
                        />
                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;