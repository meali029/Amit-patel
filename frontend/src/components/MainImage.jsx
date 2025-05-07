import React, { useState, useEffect } from 'react';
import '../styles/mainImg.css';


function MainImage() {
  const images = [
    'https://images.pexels.com/photos/52527/dentist-pain-borowac-cure-52527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3845550/pexels-photo-3845550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/19879745/pexels-photo-19879745/free-photo-of-woman-at-dentists.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="main-image">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`slide ${index === currentImageIndex ? 'active' : ''}`}
        />
      ))}
      <h2 className="main-text">Live Well <br /> Visit a Dentist.</h2>
    </div>
  );
}

export default MainImage;
