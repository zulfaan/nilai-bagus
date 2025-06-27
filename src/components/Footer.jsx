// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-washgreen-800 text-white py-16 border-t-4 border-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Nilai Bagus</h3>
            <p className="mb-6 max-w-md">
              Kami percaya pada kekuatan pendidikan untuk mengubah pikiran muda dan membentuk masa depan yang cerah.
            </p>
            
            <div className="flex items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-washpink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@nilaibagus.sch.id</span>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-washpink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Jl. Pendidikan No. 123, Jakarta Selatan</span>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About Us', 'Academics', 'Contact Us'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-washpink-300 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Other Links</h4>
              <ul className="space-y-2">
                {['Admissions', 'Student Life', 'FAQs', 'Privacy Policy'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="hover:text-washpink-300 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-washgreen-700 mt-10 pt-6 text-center">
          <p>© {new Date().getFullYear()} Nilai Bagus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;