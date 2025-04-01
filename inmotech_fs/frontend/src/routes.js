import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Portfolio from './pages/Portafolio';
import AttentionChannels from './pages/AttentionChannels';
import ApartmentContent from './pages/ApartmentContent';
import PublicationTools from './pages/PublicationTools';
import Users from './pages/Users';
import GestionUsuariosPlataforma from './pages/GestionUsuariosPlataforma';
import GestionCarousel from './pages/GestionCarousel'; // Importa el nuevo componente

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portafolio" element={<Portfolio />} />
      <Route path="/attention" element={<AttentionChannels />} />
      <Route path="/apartment/:id" element={<ApartmentContent />} />
      <Route path="/tools" element={<PublicationTools />} />
      <Route path="/users" element={<Users />} />
      <Route path="/gestion-usuarios-plataforma" element={<GestionUsuariosPlataforma />} />
      <Route path="/gestion-carousel" element={<GestionCarousel />} /> {/* Agrega la nueva ruta */}
    </Routes>
  );
}

export default AppRouter;