// src/components/Hero.jsx
import React from 'react';
import useCountUp from '../hooks/useCountUp';
import { images } from '../data/images';

const Hero = () => {
  const studentsCount = useCountUp(9000, 2000);
  const awardsCount = useCountUp(27, 2000);
  const educatorsCount = useCountUp(20, 2000);
  
  return (
    <section className="py-20 bg-gradient-to-r from-washgreen-100 to-washpink-100 border-b-4 border-black">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image dengan gaya neobrutalism */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="border-4 border-black shadow-neo rounded-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-all duration-300">
            <img 
              src={images.hero} 
              alt="Siswa Nilai Bagus sedang belajar" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        {/* Right: Content */}
        <div className="w-full md:w-1/2">
          <div className="inline-block bg-washpink-500 text-white px-4 py-1 mb-4 border-2 border-black shadow-neo">
            <h3 className="text-xl font-bold underline">Welcome to Nilai Bagus</h3>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight border-l-4 border-washgreen-500 pl-4">
            Where young minds blossom and dreams take flight.
          </h1>
          
          <p className="text-lg text-gray-800 mb-8 bg-white p-4 border-2 border-black shadow-neo">
            Kami adalah lembaga pendidikan yang berkomitmen untuk memberikan pengalaman belajar terbaik bagi setiap anak. Dengan kurikulum inovatif dan pendekatan personal, kami mempersiapkan siswa untuk masa depan yang cerah.
          </p>
          
          {/* Stats dengan gaya neobrutalism */}
          <div className="flex flex-wrap gap-4">
            <div className="bg-white rounded-xl shadow-neo p-4 text-center min-w-[120px] border-2 border-black transform hover:-translate-y-1 transition-transform">
              <div className="text-2xl font-bold text-washpink-500">{studentsCount}+</div>
              <div className="text-sm text-gray-600">students passed out</div>
            </div>
            <div className="bg-white rounded-xl shadow-neo p-4 text-center min-w-[120px] border-2 border-black transform hover:-translate-y-1 transition-transform">
              <div className="text-2xl font-bold text-washpink-500">{awardsCount}+</div>
              <div className="text-sm text-gray-600">awards & recognition</div>
            </div>
            <div className="bg-white rounded-xl shadow-neo p-4 text-center min-w-[120px] border-2 border-black transform hover:-translate-y-1 transition-transform">
              <div className="text-2xl font-bold text-washpink-500">{educatorsCount}+</div>
              <div className="text-sm text-gray-600">experience educators</div>
            </div>
          </div>
          
          {/* CTA Button */}
          <button 
            className="mt-8 bg-washgreen-500 text-white py-3 px-8 rounded-xl font-bold text-lg border-2 border-black shadow-neo hover:shadow-none hover:translate-y-1 transition-all"
            onClick={() => window.location.href = '/admissions'}
          >
            Apply Now →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;