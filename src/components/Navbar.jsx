import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/images/logo.png";
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MenuIcon, XIcon } from 'lucide-react';

const Navbar = () => {
    const [navDrawerOpen, setNavDrawerOpen] = useState(false);
    function navToggle() {
        setNavDrawerOpen(!navDrawerOpen);
    }

    return (
        <>
            <nav className='flex justify-between items-center px-12 py-5 sticky top-0 bg-gray-700 border-b-2 border-orange-600 z-20 backdrop-blur overflow-x-hidden'>
                <div>
                    
                    <img src={logo} alt="logo" className='w-12' />
                </div>
                <ul className='hidden lg:flex flex-1 justify-center items-center gap-5 text-white font-thin'>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-orange-400' : ''} end>Home</NavLink></li>
                    <li><NavLink to="/service-section-2" className={({ isActive }) => isActive ? 'text-orange-400' : ''}>Services</NavLink></li>
                    <li><NavLink to="/recent-work" className={({ isActive }) => isActive ? 'text-orange-400' : ''}>Recent Work</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => isActive ? 'text-orange-400' : ''}>About</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'text-orange-400' : ''}>Contact</NavLink></li>
                </ul>
                <button className='block lg:hidden cursor-pointer' onClick={navToggle}>
                    {navDrawerOpen ? <XIcon size={40} color='white' /> : <MenuIcon color='white' size={40} />}
                </button>
                <div className='hidden lg:flex justify-center items-center gap-2'>
                    <a href="https://www.facebook.com/profile.php?id=100090806379195" target="_blank" className="text-neutral-300 hover:text-orange-600 transition duration-300">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/farhat-ullah-938b9430b/"  target="_blank" className="text-neutral-300 hover:text-orange-600 transition duration-300">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://wa.me/+923169842612"  target="_blank" className="text-neutral-300 hover:text-orange-600 transition duration-300">
                        <FaWhatsapp size={24} />
                    </a>
                </div>
            </nav>
            {navDrawerOpen && (
                <ul className='fixed left-0 top-0 w-full h-screen z-20 flex flex-col justify-center items-center gap-5 text-white bg-black bg-opacity-75 py-9 lg:hidden'>
                    <li><NavLink to="/" onClick={navToggle} className={({ isActive }) => isActive ? 'text-orange-400' : ''} end>Home</NavLink></li>
                    <li><NavLink to="/service-section-2" onClick={navToggle} className={({ isActive }) => isActive ? 'text-orange-400' : ''}>Services</NavLink></li>
                    <li><NavLink to="/recent-work" onClick={navToggle} className={({ isActive }) => isActive ? 'text-orange-400' : ''}>Recent Work</NavLink></li>
                    <li><NavLink to="/about" onClick={navToggle} className={({ isActive }) => isActive ? 'text-orange-400' : ''}>About</NavLink></li>
                    <li><NavLink to="/contact" onClick={navToggle} className={({ isActive }) => isActive ? 'text-orange-400' : ''}>Contact</NavLink></li>
                </ul>
            )}
        </>
    )
}

export default Navbar;
