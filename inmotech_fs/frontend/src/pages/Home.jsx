import React from 'react';
import PropertyMenu from '../components/PropertyMenu';
import Carousel from '../components/home/Carousel';
import InfoSection from '../components/InfoSection';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import '../styles/home.css';
import api from '../services/api';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="carousel-section">
          <Carousel />
        </div>
        <PropertyMenu />
        <InfoSection />
        <Testimonials />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default Home;

// Dentro de un useEffect o función
const testConnection = async () => {
    try {
        const response = await api.get('/api/test');
        console.log('Respuesta del backend:', response.data);
    } catch (error) {
        console.error('Error de conexión:', error);
    }
};