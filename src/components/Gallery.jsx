import React, { useState } from 'react';
import galleryData from '../galleryData';

const Gallery = ({ activeCity = 'All', selectedCategory = 'All', searchQuery = '' }) => {
  const [selectedImage, setSelectedImage] = useState(null);

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

    if (searchQuery.trim()) {
      images = images.filter((img) =>
        `${img.city} ${img.category} ${img.caption} ${img.season || ''}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
    }

    return images;
  };

  return (
    <div className="p-4">
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
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] overflow-auto bg-white rounded shadow-lg p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-4 text-black text-3xl font-bold"
            >
              &times;
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.city}
              className="w-full max-h-[70vh] object-contain mx-auto rounded"
            />
            <div className="text-black text-center mt-4 space-y-2">
              <p className="font-semibold">{selectedImage.caption}</p>
              <p className="text-sm italic text-gray-600">City: {selectedImage.city}</p>
              <p className="text-sm italic text-gray-600">Category: {selectedImage.category}</p>
              <p className="text-sm italic text-gray-600">Season: {selectedImage.season || 'N/A'}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
