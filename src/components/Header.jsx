import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md relative z-10">
      <div className="mx-auto flex items-center justify-between p-4 relative">

        {/* Left: Logo */}
        <div className="flex items-center gap-3 z-20">
          <img
            src={`${import.meta.env.BASE_URL}sg-logo.jpg`}
            alt="Logo"
            className="w-12 h-12 rounded-lg"
          />
        </div>

        {/* Center: Title */}
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold text-center">
          SIGHT GALLERY
        </h1>

        {/* Right: Nav for large screens */}
        <nav className="hidden lg:flex gap-8 text-sm font-medium z-20">
          <Link to="/">Home</Link>
          <Link to="/seasons">Seasons</Link>
          <Link to="/cities">Cities</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Mobile/Tablet Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-2xl z-20">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile/Tablet Nav */}
      {isOpen && (
        <div className="lg:hidden w-full bg-white shadow-md">
          <ul className="flex flex-col items-center gap-4 py-4 text-sm font-medium">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/seasons" onClick={() => setIsOpen(false)}>Seasons</Link></li>
            <li><Link to="/cities" onClick={() => setIsOpen(false)}>Cities</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
