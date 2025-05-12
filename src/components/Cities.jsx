import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';

const cityData = [
  {
    name: 'Switzerland 🇨🇭',
    path: '/switzerland',
    image: `${import.meta.env.BASE_URL}switzerland-adventures/cozy-villages/JPEG-image.jpeg`,
    description: 'Discover cozy villages, frozen lakes, majestic mountains, and thrilling ski adventures in Switzerland.',
  },
  {
    name: 'Japan 🇯🇵',
    path: '/japan',
    image: `${import.meta.env.BASE_URL}japan-adventures/fall/JPEG-image-2.jpeg`,
    description: 'Experience the beauty of Japanese fall leaves, tranquil temples, and sakura-filled springs.',
  },
  {
    name: 'Thailand 🇹🇭',
    path: '/thailand',
    image: `${import.meta.env.BASE_URL}thailand-adventures/bangkok/JPEG-image-5.jpeg`,
    description: 'From bustling Bangkok to peaceful Chiang Mai and lush countryside—Thailand has it all.',
  },
  {
    name: 'Canada 🇨🇦',
    path: '/canada',
    image: `${import.meta.env.BASE_URL}canada-adventures/hiking-in-bc/hiking-4.jpeg`,
    description: 'Explore Canadian wilderness through hikes, lake-side camping, kayaking, and wildlife watching.',
  },
];

const Cities = () => {
  useEffect(() => {
    ScrollReveal().reveal('.city-card', {
      duration: 1000,
      origin: 'bottom',
      distance: '50px',
      easing: 'ease-out',
      interval: 200,
      reset: false,
    });
  }, []);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">Explore Adventures by Country</h1>

      <div className="flex flex-col gap-10">
        {cityData.map((city, index) => (
          <div
            key={city.name}
            className={`city-card flex flex-col md:flex-row ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } items-center bg-white rounded-lg shadow-lg p-4 gap-6 transition hover:shadow-xl`}
          >
            <img
              src={city.image}
              alt={city.name}
              className="w-full md:w-1/2 h-52 md:h-64 object-cover rounded"
            />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-semibold mb-3">{city.name}</h2>
              <p className="text-base text-gray-600 mb-5">{city.description}</p>
              <Link
                to={city.path}
                className="inline-block px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
              >
                See More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cities;
