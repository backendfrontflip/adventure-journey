import React, { useState } from 'react';
import galleryData from './data/galleryData';  // Assuming galleryData is in this path

const Gallery = ({ activeCity }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    'All',
    'Cozy Villages',
    'Frozen Lakes',
    'Mountains',
    'Skiing',
    'Hiking in BC',
    'Kayaking',
    'Lakes Camping',
    'Wildlife Watching',
    'Fall',
    'Spring',
    'Serene',
    'Bangkok',
    'Chiang Mai',
    'Nature',
  ];

  const renderCityGallery = (city, images) => {
    const filteredImages = selectedCategory === 'All'
      ? images
      : images.filter(image => image.category === selectedCategory);

    return (
      <div key={city} className="mb-10">
        <h2 className="text-2xl font-bold mb-4">{city}</h2>

        {/* Category Filter */}
        <div className="mb-4">
          {categories.map((category) => (
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
          {filteredImages.map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={image.src}
                alt={`${city} ${index + 1}`}
                className="w-full h-auto rounded shadow cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setSelectedImage({ ...image, city })}
              />
              <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 p-2 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                {image.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Gallery */}
      {activeCity === 'All'
        ? Object.entries(galleryData).map(([city, images]) =>
            renderCityGallery(city, images)
          )
        : renderCityGallery(activeCity, galleryData[activeCity] || [])}

      {/* Modal / Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()} // prevent modal close on image click
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
            <p className="text-white text-center mt-1 italic">{selectedImage.city}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
