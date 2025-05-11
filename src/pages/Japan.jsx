import React from 'react';
import Gallery from '../components/Gallery';

const Japan = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Japan Adventures</h2>
      <p className="text-center text-gray-600 mb-6">
        Experience the colors of fall, the peace of spring, and Japan’s serene nature.
      </p>
      <Gallery activeCity="Japan" />
    </div>
  );
};

export default Japan;
