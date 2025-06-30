// src/components/Explore.jsx
import React from 'react';
import { images } from '../data/images';

const Explore = () => {
  const exploreItems = [
    {
      title: "About Us",
      description: "Temukan visi, misi, dan nilai-nilai yang menjadi dasar pendidikan di Nilai Bagus.",
      link: "/about",
      image: images.about
    },
    {
      title: "Academics",
      description: "Jelajahi kurikulum inovatif dan program unggulan yang kami tawarkan.",
      link: "/academics",
      image: images.academics
    },
    {
      title: "Programs",
      description: "Lihat program-program unggulan kami yang mendukung prestasi siswa untuk menggapai impian.",
      link: "/programs",
      image: images.studentLife
    },
    {
      title: "Admissions",
      description: "Pelajari proses pendaftaran, persyaratan, dan jadwal penerimaan siswa baru.",
      link: "/admissions",
      image: images.admissions
    }
  ];
  
  return (
    <section className="py-20 bg-washgreen-100 border-b-4 border-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-white text-washgreen-700 px-4 py-2 rounded-full text-sm font-bold mb-4 border-2 border-black">
            Explore More
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover Our World</h2>
          <p className="text-gray-600">
            Jelajahi berbagai aspek kehidupan di Nilai Bagus dan temukan mengapa kami menjadi pilihan tepat untuk pendidikan anak Anda.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {exploreItems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-neo p-6 transition-transform duration-300 hover:-translate-y-1 border-2 border-black">
              <h3 className="text-xl font-bold mb-4 text-washgreen-700">{item.title}</h3>
              <div className="h-1 w-20 bg-gradient-to-r from-washgreen-500 to-washpink-500 mb-4"></div>
              <p className="text-gray-600 mb-6">{item.description}</p>
              <a 
                href={item.link} 
                className="inline-block bg-washpink-500 text-white py-2 px-6 rounded-full font-medium hover:bg-washpink-600 transition-colors border-2 border-black"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;