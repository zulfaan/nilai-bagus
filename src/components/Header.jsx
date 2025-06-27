// src/components/Header.jsx
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    'Home', 'About Us', 'Academics', 'Admissions', 'Student Life', 'Contact'
  ];

  return (
    <header className={`transition-all duration-300 ${isScrolled ? 'opacity-0 -translate-y-full' : 'opacity-100'}`}>
      {/* Admission Banner */}
      <div className="bg-washgreen-500 text-white py-2 px-4 rounded-full mx-4 mt-2 flex justify-center items-center max-w-max mx-auto">
        <span className="font-semibold">Admission is Open, Grab your seat now</span>
        <span className="ml-2">→</span>
      </div>
      
      {/* Navbar */}
      <nav className="bg-white shadow rounded-2xl mx-4 mt-3 p-4">
        <div className="flex justify-between items-center">
          <div className="text-washgreen-700 font-bold text-xl">Nilai Bagus</div>
          
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item, index) => (
              <a 
                key={index}
                href="#" 
                className={`font-medium transition-colors hover:text-washpink-500 ${
                  item === 'Contact' ? 'text-washpink-500' : 'text-gray-600'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Mobile Hamburger Menu */}
          <button className="md:hidden text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;