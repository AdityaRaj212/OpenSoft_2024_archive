import React, { useState } from 'react';
import './App.css';


const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {slides.map((slide, index) => (
          <div key={index} className={index === currentIndex ? 'slide active' : 'slide'}>
            {slide}
          </div>
        ))}
      </div>
      <button className="prev-button" onClick={prevSlide}>Previous</button>
      <button className="next-button" onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slider;
