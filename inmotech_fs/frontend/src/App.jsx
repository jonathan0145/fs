import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navigation from './components/common/Navigation';
import AuthForm from './pages/AuthForm';
<<<<<<< HEAD
import Inicio from './pages/Inicio';
import Inmuebles from './pages/Inmuebles';
import InmuebleDetalle from './pages/InmuebleDetalle';
import Buscar from './pages/Buscar';
import Contacto from './pages/Contacto';
import SobreNosotros from './pages/SobreNosotros';
import TerminosCondiciones from './pages/TerminosCondiciones';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import PreguntasFrecuentes from './pages/PreguntasFrecuentes';
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import AdminProperties from './pages/admin/AdminProperties';
import CreateProperty from './pages/admin/CreateProperty';
import EditProperty from './pages/admin/EditProperty';
import Visualizations from './pages/admin/Visualizations';
import './styles/Navigation.css';
import './styles/admin.css';
import Footer from './components/common/Footer';
import './styles/Footer.css';
=======
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import PublicationTools from './pages/PublicationTools';
import Contact from './pages/Contact';
import CarouselManager from './pages/GestionCarousel';
import UserManager from './components/users/UserManager';
import './styles/Navigation.css';
import PropertyList from './components/PropertyList';
import News from './pages/News';

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
>>>>>>> 4d5d530d25248b77ac1329c9afb0e3789ebe84a9

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm />} />
<<<<<<< HEAD
        <Route path="/inmueble/:id" element={<InmuebleDetalle />} />
        <Route path="/terminoscondiciones" element={<TerminosCondiciones />} />
        <Route path="/politicaprivacidad" element={<PoliticaPrivacidad />} />
        <Route path="/faq" element={<PreguntasFrecuentes />} />

        {/* Public routes with Navigation and Footer */}
        <Route path="/" element={
          <div className="d-flex flex-column min-vh-100">
            <Navigation />
            <main className="flex-grow-1">
              <Outlet />
            </main>
            <Footer />
          </div>
        }>
          <Route path="inicio" element={<Inicio />} />
          <Route path="inmuebles" element={<Inmuebles />} />
          <Route path="buscar" element={<Buscar />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="sobrenosotros" element={<SobreNosotros />} />
        </Route>

        {/* Admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="inmuebles" element={<AdminProperties />} />
          <Route path="inmuebles/crear" element={<CreateProperty />} />
          <Route path="inmuebles/editar/:id" element={<EditProperty />} />
          <Route path="visualizaciones" element={<Visualizations />} />
        </Route>
=======
        <Route path="/home" element={<Home />} />
        <Route path="/properties/rent" element={<PropertyList type="rent" />} />
        <Route path="/properties/sale" element={<PropertyList type="sale" />} />
        <Route path="/properties/all" element={<PropertyList />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/publication-tools" element={<PublicationTools />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gestioncarousel" element={<CarouselManager />} />
        <Route path="/gestionusuarios" element={<UserManager />} />
        <Route path="/noticias" element={<News />} />
>>>>>>> 4d5d530d25248b77ac1329c9afb0e3789ebe84a9
      </Routes>
    </Router>
  );
}

export default App;