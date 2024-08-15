import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-neutral-300 py-10 border-t-2 border-t-orange-600 overflow-x-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Company Info */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-white text-2xl font-bold mb-4">Farhat <span className="text-orange-600">Burki</span></h3>
            <p className="text-neutral-300 mb-4">Because I trust in Quality</p>
            <p className="text-neutral-300">
              <strong>Email:</strong> <span className="text-orange-600">farhatburki1@gmail.com</span> 
            </p>
            <p className="text-neutral-300">
              <strong>Phone:</strong> <span className="text-orange-600">+92 316 9842612</span>
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mb-8 md:mb-0 flex flex-col">
            <h4 className="text-white text-xl font-semibold mb-4">Quick <span className="text-orange-600">Links</span></h4>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'text-orange-600' : 'text-neutral-300 hover:text-orange-600 transition duration-300 mb-2'}
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? 'text-orange-600' : 'text-neutral-300 hover:text-orange-600 transition duration-300 mb-2'}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/service-section-2" 
              className={({ isActive }) => isActive ? 'text-orange-600' : 'text-neutral-300 hover:text-orange-600 transition duration-300 mb-2'}
            >
              Services
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? 'text-orange-600' : 'text-neutral-300 hover:text-orange-600 transition duration-300'}
            >
              Contact
            </NavLink>
            <NavLink 
              to="/recent-work" 
              className={({ isActive }) => isActive ? 'text-orange-600' : 'text-neutral-300 hover:text-orange-600 transition duration-300'}
            >
              Recent Work
            </NavLink>
          </div>

          {/* Social Links */}
          <div className="flex flex-col">
            <h4 className="text-white text-xl font-semibold mb-4">Follow <span className="text-orange-600">US</span></h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100090806379195" target="_blank" className="text-neutral-300 hover:text-orange-600 transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="https://x.com/farhatburki1?t=pQ7TOCdWSMCZj26e7acQ0A&s=08" target="_blank" className="text-neutral-300 hover:text-orange-600 transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.linkedin.com/in/farhat-ullah-938b9430b/" target="_blank" className="text-neutral-300 hover:text-orange-600 transition duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.instagram.com/farhatburki3?igsh=dmJ1cGE5bXV4Zml2" target="_blank" className="text-neutral-300 hover:text-orange-600 transition duration-300">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-neutral-300">
            © 2024 <span className='text-orange-600 fontorange-600'>Farhat Burki</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
