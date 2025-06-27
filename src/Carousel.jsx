import React, { useState, useEffect } from 'react';

export default function ImageCarousel({ images, autoPlayInterval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [images.length, autoPlayInterval]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-xl mx-auto p-4 overflow-hidden rounded-2xl shadow-lg">
      {/* Slides */}
      <div className="flex transition-transform duration-500"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, idx) => (
          <div key={idx} className="w-full flex-shrink-0">
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* Prev/Next Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full ${
              idx === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}