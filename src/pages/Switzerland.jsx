import React from 'react';
import Gallery from '../components/Gallery';

const Switzerland = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Switzerland Adventures</h2>
      <p className="text-center text-gray-600 mb-6">
        Discover cozy villages, frozen lakes, majestic mountains, and skiing escapes.
      </p>
      <Gallery activeCity="Switzerland" />
    </div>
  );
};

export default Switzerland;
