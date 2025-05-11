import React from 'react';
import Gallery from './Gallery';

const HomePage = () => {
  return (
    <div className="p-4">
      {/* Site Title */}
      <div className='flex justify-center font-bold text-xl mb-4'>
        <p className='sg p-4 rounded-full bg-black text-yellow-200'>
          SIGHT GALLERY
        </p>
      </div>

      {/* Intro Text */}
      <div className="text-center text-lg font-medium mb-8">
        <p className='uppercase tracking-wide'>Let's go on an adventure together</p>
        <p className="text-sm text-gray-500 mt-2">
          Explore highlights from Switzerland, Japan, Thailand, and Canada.
        </p>
      </div>

      {/* Gallery Component */}
      <Gallery activeCity="All" />
    </div>
  );
};

export default HomePage;
