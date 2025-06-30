// src/pages/Academics.js
import React, { useState, useEffect } from 'react';
import { images } from '../data/images';

const Academics = () => {
  // State untuk gallery filtering
  const [activeFilter, setActiveFilter] = useState('All');
  const [galleryIndex, setGalleryIndex] = useState(0);
  
  // Special Features data
  const features = [
    {
      id: 1,
      title: 'Thematic Learning',
      description: 'Integrated themes connect different subjects, providing meaningful context for learning and helping students see real-world connections.',
      icon: '📚',
    },
    {
      id: 2,
      title: 'STEAM Education',
      description: 'Combining Science, Technology, Engineering, Arts, and Math to foster innovation, critical thinking, and problem-solving skills.',
      icon: '🔬',
    },
    {
      id: 3,
      title: 'Language Immersion',
      description: 'Daily exposure and practice in multiple languages to develop fluency and cultural awareness from an early age.',
      icon: '🌐',
    },
    {
      id: 4,
      title: 'Art and Creativity',
      description: 'Encouraging self-expression through various art forms, music, and drama to nurture creativity and confidence.',
      icon: '🎨',
    },
    {
      id: 5,
      title: 'Outdoor Education',
      description: 'Learning beyond the classroom through nature exploration, gardening, and environmental projects.',
      icon: '🌳',
    },
    {
      id: 6,
      title: 'Play-Based Learning',
      description: 'Structured and free play activities designed to develop social, emotional, and cognitive skills in a fun environment.',
      icon: '🧩',
    },
  ];

  // What Students Learn data
  const subjects = [
    {
      id: 1,
      title: 'Language Arts',
      description: 'Developing reading, writing, speaking, and listening skills through literature and creative expression.',
      image: images.academicsSubjects.languageArts,
    },
    {
      id: 2,
      title: 'Mathematics',
      description: 'Building a strong foundation in numeracy, logical reasoning, and problem-solving with real-life applications.',
      image: images.academicsSubjects.mathematics,
    },
    {
      id: 3,
      title: 'Science',
      description: 'Exploring the natural world through hands-on experiments, observation, and inquiry-based learning.',
      image: images.academicsSubjects.science,
    },
    {
      id: 4,
      title: 'Social Studies',
      description: 'Understanding communities, cultures, geography, history, and civic responsibilities.',
      image: images.academicsSubjects.socialStudies,
    },
    {
      id: 5,
      title: 'Arts and Crafts',
      description: 'Expressing creativity through various media and techniques while developing fine motor skills.',
      image: images.academicsSubjects.artsAndCrafts,
    },
    {
      id: 6,
      title: 'Physical Education',
      description: 'Promoting physical fitness, teamwork, and healthy habits through sports and movement activities.',
      image: images.academicsSubjects.physicalEducation,
    },
  ];

  // Gallery data
  const galleryData = [
    {
      category: 'Classrooms',
      description: 'Bright, spacious classrooms designed for interactive learning and group activities.',
      images: images.academicsGallery.classrooms,
    },
    {
      category: 'Library',
      description: 'A cozy reading environment with a diverse collection of books and digital resources.',
      images: images.academicsGallery.library,
    },
    {
      category: 'Science Lab',
      description: 'Well-equipped laboratories for hands-on experiments and scientific discovery.',
      images: images.academicsGallery.scienceLab,
    },
    {
      category: 'Computer Lab',
      description: 'Modern computing facilities with the latest technology for digital literacy and coding.',
      images: images.academicsGallery.computerLab,
    },
    {
      category: 'Garden and Nature Area',
      description: 'Outdoor spaces for environmental education and connecting with nature.',
      images: images.academicsGallery.garden,
    },
  ];

  // Filter gallery images
  const filteredGallery = activeFilter === 'All' 
    ? galleryData.flatMap(item => item.images) 
    : galleryData.find(item => item.category === activeFilter)?.images || [];

  // Gallery navigation functions
  const nextGallery = () => {
    setGalleryIndex(prev => (prev + 1) % filteredGallery.length);
  };

  const prevGallery = () => {
    setGalleryIndex(prev => (prev - 1 + filteredGallery.length) % filteredGallery.length);
  };

  // Responsive design state
  const [isMobile, setIsMobile] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(4);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsMobile(true);
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setIsMobile(false);
        setSlidesToShow(2);
      } else {
        setIsMobile(false);
        setSlidesToShow(4);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Get visible gallery images
  const visibleGallery = filteredGallery.slice(galleryIndex, galleryIndex + slidesToShow);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-white border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="md:w-1/2">
              <div className="inline-block bg-washgreen-100 text-washgreen-700 px-4 py-2 rounded-full text-sm font-bold mb-4 border-2 border-black shadow-neo">
                Academics
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Nurturing Young Minds for Success</h1>
            </div>
            <div className="md:w-1/2">
              <p className="text-lg">
                Welcome to our Academics page, where we cultivate a love for learning and equip students with the skills and knowledge to thrive in an ever-changing world. Our innovative curriculum and dedicated educators create an environment that inspires curiosity, critical thinking, and creativity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Features Section */}
      <section className="py-16 bg-gray-50 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-washpink-100 text-washpink-700 px-4 py-2 rounded-full text-sm font-bold mb-4 border-2 border-black">
              Our Special Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Special Features</h2>
            <p className="text-gray-600">
              We provide a holistic and innovative learning experience designed to develop well-rounded individuals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className="border-4 border-black rounded-2xl p-6 bg-white shadow-neo transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Students Learn Section */}
      <section className="py-16 bg-white border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-washgreen-100 text-washgreen-700 px-4 py-2 rounded-full text-sm font-bold mb-4 border-2 border-black">
              Our Curriculum
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Students Learn</h2>
            <p className="text-gray-600">
              Our comprehensive curriculum covers all essential areas of early childhood and elementary education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {subjects.map((subject) => (
              <div 
                key={subject.id} 
                className="border-4 border-black rounded-2xl bg-white shadow-neo overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <img 
                  src={subject.image} 
                  alt={subject.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{subject.title}</h3>
                  <p className="text-gray-700">{subject.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50 border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-washpink-100 text-washpink-700 px-4 py-2 rounded-full text-sm font-bold mb-4 border-2 border-black">
              Our Spaces
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Rooms Gallery</h2>
            <p className="text-gray-600">
              Explore our thoughtfully designed learning environments that inspire creativity and collaboration
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['All', 'Classrooms', 'Library', 'Science Lab', 'Computer Lab', 'Garden and Nature Area'].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full border-2 border-black text-sm font-bold shadow-neo transition-colors ${
                  activeFilter === filter 
                    ? 'bg-washgreen-100 text-washgreen-700' 
                    : 'bg-white hover:bg-gray-100'
                }`}
                onClick={() => {
                  setActiveFilter(filter);
                  setGalleryIndex(0);
                }}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Gallery Display */}
          <div className="max-w-6xl mx-auto relative">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">
                {activeFilter === 'All' ? 'All Gallery' : activeFilter}
              </h3>
              <div>
                <button 
                  className="bg-white rounded-full p-2 shadow-neo hover:bg-gray-100 transition-colors border-2 border-black mx-1"
                  onClick={prevGallery}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <button 
                  className="bg-white rounded-full p-2 shadow-neo hover:bg-gray-100 transition-colors border-2 border-black mx-1"
                  onClick={nextGallery}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Gallery Description */}
            {activeFilter !== 'All' && galleryData.find(item => item.category === activeFilter) && (
              <p className="text-gray-700 mb-6">
                {galleryData.find(item => item.category === activeFilter).description}
              </p>
            )}
            
            {/* Gallery Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {visibleGallery.map((image, index) => (
                <div 
                  key={index} 
                  className="border-4 border-black rounded-2xl overflow-hidden shadow-neo transition-transform duration-300 hover:scale-105"
                >
                  <img 
                    src={image} 
                    alt={`Gallery ${index + 1}`} 
                    className="w-full h-48 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;