import React from 'react';
import Gallery from '../components/Gallery';

const Thailand = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Thailand Adventures</h2>
      <p className="text-center text-gray-600 mb-6">
        From the vibrant streets of Bangkok to the calm of Chiang Mai and lush nature.
      </p>
      <Gallery activeCity="Thailand" />
    </div>
  );
};

export default Thailand;
