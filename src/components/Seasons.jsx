import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Seasons = () => {
  const [activeSeason, setActiveSeason] = useState('Fall');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const seasonTabs = ['Fall', 'Spring', 'Serene'];

  const imagesBySeason = {
    Fall: [
      { src: `/japan-adventures/fall/JPEG-image-1.jpeg`, caption: 'Fall leaves turning golden in the forest' },
      { src: `/japan-adventures/fall/JPEG-image-2.jpeg`, caption: 'Fall leaves turning golden in the forest' },
      { src: `/japan-adventures/fall/JPEG-image-3.jpeg`, caption: 'Fall leaves turning golden in the forest' },
      { src: `/japan-adventures/fall/JPEG-image-4.jpeg`, caption: 'Fall leaves turning golden in the forest' },
      { src: `/japan-adventures/fall/JPEG-image-5.jpeg`, caption: 'Fall leaves turning golden in the forest' },
      { src: `/japan-adventures/fall/JPEG-image-6.jpeg`, caption: 'Fall leaves turning golden in the forest' },
      { src: `/japan-adventures/fall/JPEG-image-7.jpeg`, caption: 'Fall leaves turning golden in the forest' },
      { src: `/japan-adventures/fall/JPEG-image-8.jpeg`, caption: 'Fall leaves turning golden in the forest' },
      { src: `/japan-adventures/fall/JPEG-image-9.jpeg`, caption: 'Fall leaves turning golden in the forest' },
      { src: `/japan-adventures/fall/JPEG-image-10.jpeg`, caption: 'Fall leaves turning golden in the forest' },
      { src: `/japan-adventures/fall/JPEG-image-11.jpeg`, caption: 'Fall leaves turning golden in the forest' },
      { src: `/japan-adventures/fall/JPEG-image-12.jpeg`, caption: 'Fall leaves turning golden in the forest' },
      { src: `/japan-adventures/fall/JPEG-image-13.jpeg`, caption: 'Fall leaves turning golden in the forest' },
      { src: `/japan-adventures/fall/JPEG-image-14.jpeg`, caption: 'Fall leaves turning golden in the forest' },
      { src: `/japan-adventures/fall/JPEG-image-15.jpeg`, caption: 'Fall leaves turning golden in the forest' },
      { src: `/japan-adventures/fall/JPEG-image-16.jpeg`, caption: 'Fall leaves turning golden in the forest' },
      { src: `/japan-adventures/fall/JPEG-image-17.jpeg`, caption: 'Fall leaves turning golden in the forest' },
      { src: `/japan-adventures/fall/JPEG-image-18.jpeg`, caption: 'Fall leaves turning golden in the forest' },
      { src: `/japan-adventures/fall/JPEG-image-19.jpeg`, caption: 'Fall leaves turning golden in the forest' },
      { src: `/japan-adventures/fall/JPEG-image-20.jpeg`, caption: 'Fall leaves turning golden in the forest' },
      { src: `/japan-adventures/fall/JPEG-image-21.jpeg`, caption: 'Fall leaves turning golden in the forest' },
      { src: `/japan-adventures/fall/JPEG-image-22.jpeg`, caption: 'Fall leaves turning golden in the forest' },
      { src: `/japan-adventures/fall/JPEG-image-23.jpeg`, caption: 'Fall leaves turning golden in the forest' },
      { src: `/japan-adventures/fall/JPEG-image-24.jpeg`, caption: 'Fall leaves turning golden in the forest' },
      { src: `/japan-adventures/fall/JPEG-image-25.jpeg`, caption: 'Fall leaves turning golden in the forest' },
      { src: `/japan-adventures/fall/JPEG-image-26.jpeg`, caption: 'Fall leaves turning golden in the forest' },
      { src: `/japan-adventures/fall/JPEG-image-27.jpeg`, caption: 'Fall leaves turning golden in the forest' },
      { src: `/japan-adventures/fall/JPEG-image-28.jpeg`, caption: 'Fall leaves turning golden in the forest' },
      // Add all the other images as needed
    ],
    Spring: [
      { src: `/japan-adventures/spring/AV1-Image-File-Format-2.avif`, caption: 'Cherry blossoms blooming in Spring' },
      { src: `/japan-adventures/spring/AV1-Image-File-Format-3.avif`, caption: 'Cherry blossoms blooming in Spring' },
      { src: `/japan-adventures/spring/AV1-Image-File-Format-4.avif`, caption: 'Cherry blossoms blooming in Spring' },
      { src: `/japan-adventures/spring/AV1-Image-File-Format-5.avif`, caption: 'Cherry blossoms blooming in Spring' },
      { src: `/japan-adventures/spring/AV1-Image-File-Format-3.avif`, caption: 'Cherry blossoms blooming in Spring' },
      { src: `/japan-adventures/spring/JPEG-image-2.jpeg`, caption: 'Cherry blossoms blooming in Spring' },
      { src: `/japan-adventures/spring/JPEG-image-3.jpeg`, caption: 'Cherry blossoms blooming in Spring' },
      { src: `/japan-adventures/spring/JPEG-image-4.jpeg`, caption: 'Cherry blossoms blooming in Spring' },
      { src: `/japan-adventures/spring/JPEG-image-5.jpeg`, caption: 'Cherry blossoms blooming in Spring' },
      { src: `/japan-adventures/spring/JPEG-image-6.jpeg`, caption: 'Cherry blossoms blooming in Spring' },
      { src: `/japan-adventures/spring/JPEG-image-7.jpeg`, caption: 'Cherry blossoms blooming in Spring' },
      { src: `/japan-adventures/spring/JPEG-image-8.jpeg`, caption: 'Cherry blossoms blooming in Spring' },
      { src: `/japan-adventures/spring/JPEG-image-9.jpeg`, caption: 'Cherry blossoms blooming in Spring' },
      { src: `/japan-adventures/spring/JPEG-image-10.jpeg`, caption: 'Cherry blossoms blooming in Spring' },
      { src: `/japan-adventures/spring/JPEG-image-11.jpeg`, caption: 'Cherry blossoms blooming in Spring' },
      { src: `/japan-adventures/spring/JPEG-image-12.jpeg`, caption: 'Cherry blossoms blooming in Spring' },
      { src: `/japan-adventures/spring/JPEG-image-13.jpeg`, caption: 'Cherry blossoms blooming in Spring' },
      { src: `/japan-adventures/spring/JPEG-image-14.jpeg`, caption: 'Cherry blossoms blooming in Spring' },
      { src: `/japan-adventures/spring/JPEG-image-15.jpeg`, caption: 'Cherry blossoms blooming in Spring' },
      { src: `/japan-adventures/spring/JPEG-image-16.jpeg`, caption: 'Cherry blossoms blooming in Spring' },
      { src: `/japan-adventures/spring/JPEG-image-17.jpeg`, caption: 'Cherry blossoms blooming in Spring' },
      { src: `/japan-adventures/spring/JPEG-image-18.jpeg`, caption: 'Cherry blossoms blooming in Spring' },
      { src: `/japan-adventures/spring/JPEG-image-19.jpeg`, caption: 'Cherry blossoms blooming in Spring' },
      { src: `/japan-adventures/spring/JPEG-image-20.jpeg`, caption: 'Cherry blossoms blooming in Spring' },
      { src: `/japan-adventures/spring/JPEG-image-21.jpeg`, caption: 'Cherry blossoms blooming in Spring' },
      { src: `/japan-adventures/spring/JPEG-image-22.jpeg`, caption: 'Cherry blossoms blooming in Spring' },
      { src: `/japan-adventures/spring/JPEG-image-23.jpeg`, caption: 'Cherry blossoms blooming in Spring' },
      { src: `/japan-adventures/spring/JPEG-image-24.jpeg`, caption: 'Cherry blossoms blooming in Spring' },
      { src: `/japan-adventures/spring/JPEG-image.jpeg`, caption: 'Cherry blossoms blooming in Spring' },
      // Add all the other images as needed
    ],
    Serene: [
      { src: `/japan-adventures/serene/JPEG-image-1.avif`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-2.avif`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-2.jpeg`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-3.avif`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-3.jpeg`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-4.avif`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-4.jpeg`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-5.avif`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-5.jpeg`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-6.avif`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-6.jpeg`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-7.jpeg`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-8.jpeg`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-9.jpeg`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-10.jpeg`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-11.jpeg`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-12.jpeg`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-13.jpeg`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-14.jpeg`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-15.jpeg`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-16.jpeg`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-17.jpeg`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-18.jpeg`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-19.jpeg`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-20.jpeg`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-21.jpeg`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-22.jpeg`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-23.jpeg`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-24.jpeg`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-25.jpeg`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-26.jpeg`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-27.jpeg`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image-28.jpeg`, caption: 'A tranquil temple surrounded by nature' },
      { src: `/japan-adventures/serene/JPEG-image.jpeg`, caption: 'A tranquil temple surrounded by nature' },
      // Add all the other images as needed
    ],
  }

  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1000,
      delay: 200,
      reset: true,
    });

    sr.reveal('.image-item', {
      interval: 200, 
      origin: 'bottom', 
    });
  }, []); 
  return (
    <>
      <div>
        <div className="flex justify-center space-x-4 p-4">
          {seasonTabs.map(season => (
            <button
              key={season}
              onClick={() => setActiveSeason(season)}
              className={`px-4 py-2 rounded-md border bg-black text-yellow-500 ${activeSeason === season ? 'bg-gray-500' : 'hover:bg-gray-500'}`}
            >
              {season}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {imagesBySeason[activeSeason].map((image, index) => (
            <div key={index} className="image-item cursor-pointer" onClick={() => handleImageClick(image)}>
              <img 
                src={import.meta.env.BASE_URL + image.src} 
                alt={image.caption} 
                className="w-full h-48 object-cover rounded-md" 
              />
              <p className="text-center mt-2">{image.caption}</p>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded-lg max-w-lg w-full">
              <img 
                src={import.meta.env.BASE_URL + selectedImage.src} 
                alt={selectedImage.caption} 
                className="w-full h-auto mb-4 rounded-md"
              />
              <p className="text-center">{selectedImage.caption}</p>
              <button onClick={closeModal} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md">Close</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Seasons;
