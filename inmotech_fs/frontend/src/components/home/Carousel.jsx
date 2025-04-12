import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import tarjeta1 from '../../assets/images/tarjeta1.webp';
import tarjeta2 from '../../assets/images/tarjeta2.webp';
import tarjeta3 from '../../assets/images/tarjeta3.webp';
import './Carousel.css';

const Carousel = () => {
  const navigate = useNavigate();

  const handleNewsClick = (e) => {
    e.stopPropagation();
    navigate('/noticias');
  };

  return (
    <BootstrapCarousel className="custom-carousel">
      <BootstrapCarousel.Item>
        <img
          className="d-block w-100"
          src={tarjeta1}
          alt="First slide"
        />
        <div className="news-link" onClick={handleNewsClick}></div>
      </BootstrapCarousel.Item>
      {/* Repeat for other slides */}
    </BootstrapCarousel>
  );
};

export default Carousel;