import React, { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      role: "Parent of Student",
      rating: 5,
      content: "Anak saya berkembang pesat sejak bergabung dengan Nilai Bagus. Metode pengajarannya sangat menyenangkan!",
      image: "avatar1"
    },
    {
      id: 2,
      name: "Siti Rahayu",
      role: "Parent of Student",
      rating: 5,
      content: "Guru-guru sangat perhatian dan komunikasi dengan orang tua sangat baik. Sangat direkomendasikan!",
      image: "avatar2"
    },
    {
      id: 3,
      name: "Ahmad Fauzi",
      role: "Parent of Student",
      rating: 5,
      content: "Fasilitas lengkap dan programnya beragam. Anak saya jadi lebih percaya diri dan mandiri.",
      image: "avatar3"
    },
    {
      id: 4,
      name: "Dewi Lestari",
      role: "Parent of Student",
      rating: 5,
      content: "Saya melihat perubahan positif pada anak saya dalam hal sosialisasi dan akademik.",
      image: "avatar4"
    },
    {
      id: 5,
      name: "Eko Prasetyo",
      role: "Parent of Student",
      rating: 5,
      content: "Pendekatan individual membuat anak saya yang pemalu menjadi lebih terbuka dan aktif.",
      image: "avatar5"
    },
    {
      id: 6,
      name: "Fitriani Putri",
      role: "Parent of Student",
      rating: 5,
      content: "Program ekstrakurikuler yang beragam membantu anak saya menemukan bakatnya.",
      image: "avatar6"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };
  
  return (
    <section className="py-20 bg-washpink-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-washpink-200 text-washpink-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Their happy words
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Testimonials</h2>
          <p className="text-gray-600">
            Apa kata orang tua tentang pengalaman mereka dengan Nilai Bagus? Simak cerita mereka.
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full md:w-1/3 flex-shrink-0 p-4">
                <div className="bg-white rounded-2xl shadow-lg p-6 h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    <div className="ml-4">
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
            onClick={prevSlide}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button 
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
            onClick={nextSlide}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;