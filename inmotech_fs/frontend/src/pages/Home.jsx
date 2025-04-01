import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Link } from 'react-router-dom';

//*importando componentes
import Carrusel from '../components/carrusel/Carrusel';

function Home() {
  const slides = JSON.parse(localStorage.getItem('carouselSlides')) || [];

  return (
    <div>
      <h1>hola</h1>
      <h1>Página de Inicio</h1>
      <Link to="/gestion-carousel">Gestionar Carrusel</Link>
      <Carrusel slides={slides}/>
    </div>
  );
}

export default Home;