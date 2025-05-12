import React, { useState, useEffect } from 'react';
import Gallery from './Gallery';
import galleryData from '../galleryData';
import ScrollReveal from 'scrollreveal';

const HomePage = () => {
  const [activeCity, setActiveCity] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const allCities = ['All', ...Object.keys(galleryData)];
  const allCategories = ['All', ...new Set(
    Object.values(galleryData).flat().map((img) => img.category)
  )];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleFilterChange = () => {
    if (window.innerWidth <= 640) {
      setShowFilters(false);
    }
  };

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.homepage-intro', {
      origin: 'top',
      distance: '30px',
      duration: 800,
      easing: 'ease-out',
    });

    sr.reveal('.homepage-filters', {
      origin: 'bottom',
      distance: '40px',
      duration: 900,
      delay: 200,
      easing: 'ease-out',
    });
  }, []);

  // When the mobile filter dropdown is toggled on, reveal it
  useEffect(() => {
    if (showFilters && window.innerWidth <= 640) {
      ScrollReveal().reveal('.mobile-filters-animated', {
        origin: 'top',
        distance: '20px',
        duration: 600,
        easing: 'ease-out',
        reset: false,
      });
    }
  }, [showFilters]);

  return (
    <div className="p-4">
      {/* Intro Text */}
      <div className="text-center text-lg font-medium mb-8 homepage-intro">
        <p className='uppercase tracking-wide'>Let's go on an adventure together</p>
        <p className="text-sm text-gray-500 mt-2">
          Explore highlights from cities across the world. Come back daily for more updates.
        </p>
      </div>

      {/* Mobile Filter Toggle Button */}
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

      {/* Filter Controls */}
      <div
        className={`
          homepage-filters mobile-filters-animated 
          transition-all duration-500 ease-in-out overflow-hidden 
          ${showFilters ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'} 
          sm:max-h-full sm:opacity-100 sm:flex 
          flex-col sm:flex-row justify-center gap-4 mb-6 items-center
        `}
      >
        <select
          className="border rounded-lg px-4 py-2 w-full sm:w-auto mb-4 sm:mb-0"
          value={activeCity}
          onChange={(e) => { setActiveCity(e.target.value); handleFilterChange(); }}
        >
          {allCities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>

        <select
          className="border rounded-lg px-4 py-2 w-full sm:w-auto mb-4 sm:mb-0"
          value={selectedCategory}
          onChange={(e) => { setSelectedCategory(e.target.value); handleFilterChange(); }}
        >
          {allCategories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search by city, category, or season"
          value={searchQuery}
          onChange={handleSearch}
          className="border rounded px-4 py-2 w-full sm:w-64"
        />
      </div>

      {/* Gallery */}
      <Gallery
        activeCity={activeCity}
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
      />
    </div>
  );
};

export default HomePage;
