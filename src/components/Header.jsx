// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Programs', path: '/programs' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact', path: '/contact', highlight: true }
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-neo' : 'bg-transparent'}`}>
      <div className="w-full bg-washgreen-500 py-2 px-4">
        <button 
          className="w-full text-center text-white font-bold flex justify-center items-center space-x-2"
          onClick={() => window.location.href = '/admissions'}
        >
          <span>Admission is Open, Grab your seat now</span>
          <span className="text-xl">→</span>
        </button>
      </div>
      
      {/* Navbar - Neobrutalism Style */}
      <nav className="bg-white border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <Link to="/" className="text-washgreen-700 font-bold text-2xl border-b-4 border-washpink-500 pb-1">
              Nilai Bagus
            </Link>
            
            {/* Desktop Menu - Tablet spacing */}
            <div className="hidden md:flex md:space-x-2 lg:space-x-6 items-center">
              {menuItems.map((item, index) => (
                <Link 
                  key={index}
                  to={item.path} 
                  className={`font-bold transition-all duration-200 hover:text-washpink-500 px-2 py-1 text-sm lg:text-base lg:px-3 ${
                    item.highlight 
                      ? 'bg-washpink-500 text-white border-2 border-black shadow-neo' 
                      : 'text-gray-900 hover:border-b-4 hover:border-washgreen-500'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Mobile Hamburger Menu - Tampil di bawah 768px */}
            <button 
              className="md:hidden text-gray-900 border-2 border-black p-2 shadow-neo bg-white"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Side Panel - Muncul saat hamburger diklik */}
      <div 
        className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        {/* Overlay untuk menutup menu */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={closeMenu}
        ></div>
        
        {/* Panel Menu */}
        <div className="absolute right-0 top-0 h-full w-4/5 max-w-xs bg-white border-l-4 border-black shadow-neo flex flex-col">
          <div className="flex justify-between items-center p-4 border-b-4 border-black bg-white">
            <Link 
              to="/" 
              className="text-washgreen-700 font-bold text-2xl"
              onClick={closeMenu}
            >
              Nilai Bagus
            </Link>
            <button 
              className="text-gray-900 border-2 border-black p-1 shadow-neo bg-white"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col p-4 space-y-3 mt-4 overflow-y-auto">
            {menuItems.map((item, index) => (
              <Link 
                key={index}
                to={item.path} 
                className={`font-bold text-left py-3 px-4 transition-colors ${
                  item.highlight 
                    ? 'bg-washpink-500 text-white border-2 border-black shadow-neo' 
                    : 'text-gray-900 border-2 border-black'
                }`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;