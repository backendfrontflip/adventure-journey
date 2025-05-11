import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='flex flex-col sm:flex-row items-center justify-between p-4 bg-white shadow relative z-10'>
      {/* Top Row */}
      <div className='flex items-center justify-between w-full sm:w-auto'>
        {/* Logo */}
        <img src="/sg-logo.jpg" alt="Logo" className='w-12 h-12 rounded-lg' />

        {/* Right Icons (Mobile) */}
        <div className='flex items-center gap-4 sm:hidden'>
          {/* User Profile Icon */}
          <FaUser className='text-gray-600 text-xl cursor-pointer' />
          
          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className='text-2xl'>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Desktop Search and Nav */}
      <div className='hidden sm:flex items-center gap-6'>
        {/* User Profile Icon */}
        <FaUser className='text-gray-600 text-xl cursor-pointer' />

        {/* Navigation Links */}
        <nav className='flex gap-6 text-sm font-medium'>
          <Link to="/">Home</Link>
          <Link to="/journey">Journey</Link>
          <Link to="/cities">Cities</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className='absolute top-full left-0 w-full bg-white shadow-md sm:hidden'>
          <ul className='flex flex-col p-4 gap-4 text-center'>
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/journey" onClick={() => setIsOpen(false)}>Journey</Link></li>
            <li><Link to="/cities" onClick={() => setIsOpen(false)}>Cities</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
