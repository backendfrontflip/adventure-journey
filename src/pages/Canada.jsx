import React from 'react';
import Gallery from '../components/Gallery';

const Canada = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Canada Adventures</h2>
      <p className="text-center text-gray-600 mb-6">
        Explore hiking trails, kayaking journeys, camping by lakes, and wildlife moments.
      </p>
      <Gallery activeCity="Canada" />
    </div>
  );
};

export default Canada;
