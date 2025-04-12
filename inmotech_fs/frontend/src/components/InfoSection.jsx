import React from 'react';
import fondoLogin from '../assets/images/fondo_login.webp';
import '../styles/InfoSection.css';

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="info-container">
        <img 
          src={fondoLogin}
          alt="Inmotech handshake" 
          className="info-image"
        />
        <div className="info-content">
          <h2>INMOTECH</h2>
          <p>"INMOTECH, la plataforma tecnológica de origen colombiano que permite la compra o venta de vivienda usada en tiempos récord, acaba de dar un gran salto en el mercado inmobiliario".</p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;