import React, { useState, useEffect, useRef } from 'react';

const Testimonials = ({ text, autoPlayInterval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = text.length;
  const carouselRef = useRef(null);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const handleAutoPlay = () => {
    nextSlide();
  };

  // Auto-play the carousel
  useEffect(() => {
    const interval = setInterval(handleAutoPlay, autoPlayInterval);
    return () => clearInterval(interval);
  }, []);

  let content = text.map((item, index) =>
    {return(
        <div className='slide' key={index}>
            <p>★★★★★</p>
            <p>{item.body}</p>
            <small>{item.client}</small>
        </div>
    )})

  return (
    <>
    <div className="carousel" ref={carouselRef}>
    <h3>Happy Clients</h3>
      <div className="carousel-slider" style={{
          transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
          width: `${totalSlides * 100}%`,
        }}>
        {content}
      </div>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
    </>
  );
};

export default Testimonials;