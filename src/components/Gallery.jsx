import React, { useState } from 'react';
import { images } from '../data/images';

const descriptions = {
  classrooms: {
    title: "Classrooms",
    description: "Our classrooms are designed to encourage interaction and active learning."
  },
  library: {
    title: "Library",
    description: "Our library offers a rich collection of resources for students to explore and learn independently."
  },
  scienceLab: {
    title: "Science Lab",
    description: "Hands-on experiments and discovery await in our fully equipped science laboratories."
  },
  computerLab: {
    title: "Computer Lab",
    description: "Our computer labs empower students with essential digital skills in a modern setting."
  },
  garden: {
    title: "Garden",
    description: "A tranquil green space where students relax, play, and connect with nature."
  }
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [errorImages, setErrorImages] = useState({});

  const categories = ['all', ...Object.keys(images.academicsGallery)];

  const allImages = Object.entries(images.academicsGallery).flatMap(([category, imageList]) =>
    imageList.map((img, index) => ({
      category,
      src: img,
      label: `Image ${index + 1}`
    }))
  );

  const currentImages =
    selectedCategory === 'all'
      ? allImages
      : allImages.filter((img) => img.category === selectedCategory);

  const handleImageError = (src) => {
    setErrorImages((prev) => ({ ...prev, [src]: true }));
  };

  const currentCategoryInfo =
    selectedCategory === 'all'
      ? null
      : descriptions[selectedCategory];

  return (
    <div className="container py-16">
      {/* <h2 className="text-3xl font-extrabold text-center mb-4 text-washgreen-700">
        School Gallery
      </h2>
      <p className="text-center text-washgreen-700 mb-8 max-w-2xl mx-auto">
        Explore snapshots of our vibrant learning spaces—from classrooms and science labs to
        libraries and gardens.
      </p> */}

      {/* Tombol Kategori */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 text-sm font-bold border-2 rounded-md ${
              selectedCategory === category
                ? 'bg-washpink-500 text-white border-black shadow-neo'
                : 'bg-white text-black border-black'
            } transition-all`}
          >
            {category === 'all'
              ? 'All'
              : category.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase())}
          </button>
        ))}
      </div>

      {/* Deskripsi Kategori */}
      {currentCategoryInfo && (
        <div className="mb-10 text-center transition-all duration-500">
          <h3 className="text-2xl font-bold text-washgreen-700 mb-2">
            {currentCategoryInfo.title}
          </h3>
          <p className="text-gray-700">{currentCategoryInfo.description}</p>
        </div>
      )}

      {/* Grid Gambar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentImages.map((img, index) => (
          <div
            key={index}
            className="border-2 border-black shadow-neo overflow-hidden rounded-md transform transition-transform duration-300 hover:-translate-y-1"
          >
            {errorImages[img.src] ? (
              <div className="w-full h-56 flex items-center justify-center bg-gray-300 text-black text-sm font-bold border-b-2 border-black">
                Image not available
              </div>
            ) : (
              <img
                src={img.src}
                alt={`${img.category}-${index}`}
                className="w-full h-56 object-cover"
                onError={() => handleImageError(img.src)}
              />
            )}
            <div className="bg-white text-center text-xs font-bold py-2 border-t-2 border-black">
              {img.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
