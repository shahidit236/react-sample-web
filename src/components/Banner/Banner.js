import React, { useEffect, useRef } from 'react';
import './Banner.css';
import banner1 from './banner1.jpg';
import banner2 from './banner2.jpg';
import banner3 from './banner3.jpg';
import banner4 from './banner4.jpg';
import banner5 from './banner5.jpg';
import banner6 from './banner6.jpg';

const Banner = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const images = [banner1, banner2, banner3, banner4, banner5, banner6];
    let currentIndex = 0;

    const slideImages = () => {
      if (carouselRef.current) {
        carouselRef.current.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
      }
    };

    const interval = setInterval(slideImages, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">
      <img ref={carouselRef} alt="banner" className="carousel-image" />
    </div>
  );
};

export default Banner;
