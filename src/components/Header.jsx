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

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Student Life', path: '/student-life' },
    { name: 'Contact', path: '/contact', highlight: true }
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-neo' : 'bg-transparent'}`}>
      {/* Admission Banner Button - Full width */}
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
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {menuItems.map((item, index) => (
                <Link 
                  key={index}
                  to={item.path} 
                  className={`font-bold transition-all duration-200 hover:text-washpink-500 px-3 py-1 ${
                    item.highlight 
                      ? 'bg-washpink-500 text-white border-2 border-black shadow-neo' 
                      : 'text-gray-900 hover:border-b-4 hover:border-washgreen-500'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Mobile Hamburger Menu */}
            <button 
              className="md:hidden text-gray-900 border-2 border-black p-2 shadow-neo"
              onClick={toggleMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu (show when isMenuOpen is true) */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t-2 border-black bg-white">
              <div className="flex flex-col space-y-3">
                {menuItems.map((item, index) => (
                  <Link 
                    key={index}
                    to={item.path} 
                    className={`font-bold text-center py-2 px-4 transition-colors ${
                      item.highlight 
                        ? 'bg-washpink-500 text-white border-2 border-black shadow-neo' 
                        : 'text-gray-900 border-2 border-black'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;