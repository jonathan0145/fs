import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import AuthForm from './pages/AuthForm';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import PublicationTools from './pages/PublicationTools';
import Contact from './pages/Contact';
import UserManager from './components/users/UserManager';
import CarouselManager from './components/carrusel/CarouselManager';
import './styles/Navigation.css';

// Componente para renderizar la navegación condicionalmente
const ConditionalNavigation = () => {
  const location = useLocation();
  
  // Si estamos en la página de inicio, no renderizamos la navegación aquí
  // ya que se renderizará dentro del componente Home
  if (location.pathname === '/') {
    return null;
  }
  
  return <Navigation />;
};

function App() {
  return (
    <Router>
      <ConditionalNavigation />
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/publication-tools" element={<PublicationTools />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gestioncarousel" element={<CarouselManager />} />
        <Route path="/gestionusuarios" element={<UserManager />} />
      </Routes>
    </Router>
  );
}

export default App;