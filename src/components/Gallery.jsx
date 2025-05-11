import React, { useState } from 'react';
import galleryData from '../galleryData';

const Gallery = ({ activeCity = 'All' }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  // Build list of unique categories for the selected city/cities
  const getAllCategories = () => {
    const allImages =
      activeCity === 'All'
        ? Object.values(galleryData).flat()
        : galleryData[activeCity] || [];

    const uniqueCategories = Array.from(
      new Set(allImages.map((img) => img.category))
    );
    return ['All', ...uniqueCategories];
  };

  const filteredImages = () => {
    let images =
      activeCity === 'All'
        ? Object.entries(galleryData).flatMap(([city, imgs]) =>
            imgs.map((img) => ({ ...img, city }))
          )
        : (galleryData[activeCity] || []).map((img) => ({ ...img, city: activeCity }));

    if (selectedCategory !== 'All') {
      images = images.filter((img) => img.category === selectedCategory);
    }

    return images;
  };

  return (
    <div className="p-4">
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {getAllCategories().map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              selectedCategory === category
                ? 'bg-black text-yellow-200'
                : 'bg-gray-200 text-gray-800 hover:bg-black hover:text-yellow-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages().map((image, index) => (
          <div key={index} className="relative group">
            <img
              src={image.src}
              alt={`Adventure ${index}`}
              className="w-full h-64 object-cover rounded shadow cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelectedImage(image)}
            />
            <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-60 p-2 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              {image.caption}
            </p>
          </div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-3xl font-bold"
            >
              &times;
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.city}
              className="w-full h-auto rounded shadow-lg"
            />
            <p className="text-white text-center mt-4">{selectedImage.caption}</p>
            <p className="text-white text-center text-sm italic">{selectedImage.city}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
