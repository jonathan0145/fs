import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthForm from './pages/AuthForm';
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
import GestionCarousel from './pages/GestionCarousel';

// Componente para proteger rutas
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return children;
};

function AppRouter() {
  return (
    <Routes>
      {/* Ruta pública para autenticación */}
      <Route path="/" element={<AuthForm />} />
      
      {/* Rutas protegidas */}
      <Route path="/home" element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      } />
      <Route path="/about" element={
        <ProtectedRoute>
          <AboutUs />
        </ProtectedRoute>
      } />
      <Route path="/services" element={
        <ProtectedRoute>
          <Services />
        </ProtectedRoute>
      } />
      <Route path="/contact" element={
        <ProtectedRoute>
          <Contact />
        </ProtectedRoute>
      } />
      <Route path="/portafolio" element={
        <ProtectedRoute>
          <Portfolio />
        </ProtectedRoute>
      } />
      <Route path="/attention" element={
        <ProtectedRoute>
          <AttentionChannels />
        </ProtectedRoute>
      } />
      <Route path="/apartment/:id" element={
        <ProtectedRoute>
          <ApartmentContent />
        </ProtectedRoute>
      } />
      <Route path="/tools" element={
        <ProtectedRoute>
          <PublicationTools />
        </ProtectedRoute>
      } />
      <Route path="/users" element={
        <ProtectedRoute>
          <Users />
        </ProtectedRoute>
      } />
      <Route path="/gestion-usuarios-plataforma" element={
        <ProtectedRoute>
          <GestionUsuariosPlataforma />
        </ProtectedRoute>
      } />
      <Route path="/gestion-carousel" element={
        <ProtectedRoute>
          <GestionCarousel />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default AppRouter;