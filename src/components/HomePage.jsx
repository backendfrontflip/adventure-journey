import React, { useState } from 'react';
import Gallery from './Gallery';
import galleryData from '../galleryData';

const HomePage = () => {
  const [activeCity, setActiveCity] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false); // For mobile toggle

  const allCities = ['All', ...Object.keys(galleryData)];
  const allCategories = ['All', ...new Set(
    Object.values(galleryData).flat().map((img) => img.category)
  )];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleFilterChange = () => {
    if (window.innerWidth <= 640) {
      setShowFilters(false); // Collapse filters on mobile after a selection
    }
  };

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
          Explore highlights from cities across the world. Come back daily for more updates.
        </p>
      </div>

      {/* Toggle Filters on Mobile */}
      <div className="sm:hidden flex justify-center mb-4">
        <button
          className="px-4 py-2 bg-black text-yellow-200 rounded flex items-center gap-2"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? 'Hide Filters' : 'Show Filters'}
          <span className={`transition-transform ${showFilters ? 'rotate-180' : 'rotate-0'}`}>
            ▼
          </span>
        </button>
      </div>

      {/* Filters Section */}
      <div
        className={`
          transition-all duration-500 ease-in-out overflow-hidden 
          ${showFilters ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'} 
          sm:max-h-full sm:opacity-100 sm:flex 
          flex-col sm:flex-row justify-center gap-4 mb-6 items-center
        `}
      >
        {/* City Filter */}
        <select
          className="border rounded-lg px-4 py-2 w-full sm:w-auto mb-4 sm:mb-0"
          value={activeCity}
          onChange={(e) => { setActiveCity(e.target.value); handleFilterChange(); }}
        >
          {allCities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>

        {/* Category Filter */}
        <select
          className="border rounded-lg px-4 py-2 w-full sm:w-auto mb-4 sm:mb-0"
          value={selectedCategory}
          onChange={(e) => { setSelectedCategory(e.target.value); handleFilterChange(); }}
        >
          {allCategories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by city, category, or season"
          value={searchQuery}
          onChange={handleSearch}
          className="border rounded px-4 py-2 w-full sm:w-64"
        />
      </div>

      {/* Gallery Component */}
      <Gallery
        activeCity={activeCity}
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
      />
    </div>
  );
};

export default HomePage;
