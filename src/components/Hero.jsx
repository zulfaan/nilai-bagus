import React from 'react';
import useCountUp from '../hooks/useCountUp';

const Hero = () => {
  const studentsCount = useCountUp(9000, 2000);
  const awardsCount = useCountUp(27, 2000);
  const educatorsCount = useCountUp(20, 2000);
  
  return (
    <section className="py-20 bg-gradient-to-r from-washgreen-100 to-washpink-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 md:h-[500px] flex items-center justify-center text-gray-500">
            {/* Placeholder for school image */}
            School Image
          </div>
        </div>
        
        {/* Right: Content */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-bold text-washgreen-700 underline mb-4">Welcome to Nilai Bagus</h3>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Where young minds blossom and dreams take flight.
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Kami adalah lembaga pendidikan yang berkomitmen untuk memberikan pengalaman belajar terbaik bagi setiap anak. Dengan kurikulum inovatif dan pendekatan personal, kami mempersiapkan siswa untuk masa depan yang cerah.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap gap-4">
            <div className="bg-white rounded-2xl shadow-lg p-4 text-center min-w-[120px]">
              <div className="text-2xl font-bold text-washpink-500">{studentsCount}+</div>
              <div className="text-sm text-gray-600">students passed out</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-4 text-center min-w-[120px]">
              <div className="text-2xl font-bold text-washpink-500">{awardsCount}+</div>
              <div className="text-sm text-gray-600">awards & recognition</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-4 text-center min-w-[120px]">
              <div className="text-2xl font-bold text-washpink-500">{educatorsCount}+</div>
              <div className="text-sm text-gray-600">experience educators</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;