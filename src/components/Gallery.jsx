import React, { useState } from 'react';
import { images } from '../data/images';

const categoryTitles = {
  classrooms: "Classrooms",
  library: "Library",
  scienceLab: "Science Lab",
  computerLab: "Computer Lab",
  garden: "Garden"
}

const categoryDescriptions = {
  classrooms: "Our classrooms are designed to foster creativity, collaboration, and critical thinking.",
  library: "The library offers a vast collection of books and a quiet space for focused study.",
  scienceLab: "Equipped with modern tools to support scientific exploration and experimentation.",
  computerLab: "Technology-enhanced space for learning digital skills and programming.",
  garden: "A refreshing outdoor area that promotes environmental awareness and relaxation."
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [errorImages, setErrorImages] = useState({});

  const categories = ['all', ...Object.keys(images.academicsGallery)];

  const allImages = Object.values(images.academicsGallery).flat();
  const currentImages =
    selectedCategory === 'all'
      ? allImages
      : images.academicsGallery[selectedCategory];

  const handleImageError = (src) => {
    setErrorImages((prev) => ({ ...prev, [src]: true }));
  };

  return (
    <div className="container py-16">
      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 text-base font-bold border-2 rounded-md ${
              selectedCategory === category
                ? 'bg-washpink-500 text-white border-black shadow-neo'
                : 'bg-white text-black border-black'
            } transition-all hover:shadow-neo-hover`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Deskripsi Kategori */}
      <h2 className="text-3xl font-bold text-center mb-4">
        {categoryTitles[selectedCategory]}
      </h2>
      <p className="text-center max-w-xl mx-auto text-gray-700 mb-10">
        {categoryDescriptions[selectedCategory]}
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentImages.map((image, index) => (
          <div
            key={index}
            className="border-2 border-black shadow-neo overflow-hidden transition-transform transform hover:-translate-y-1"
          >
            {errorImages[image] ? (
              <div className="w-full h-56 flex items-center justify-center bg-gray-300 text-black text-sm font-bold border-b-2 border-black">
                Image not available
              </div>
            ) : (
              <img
                src={image}
                alt={`gallery-${index}`}
                className="w-full h-56 object-cover"
                onError={() => handleImageError(image)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
