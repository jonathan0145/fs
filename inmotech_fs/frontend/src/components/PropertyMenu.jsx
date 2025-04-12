import React from 'react';
import { Link } from 'react-router-dom';
import imagenArriendo from '../assets/images/imagenb1.webp';
import imagenVenta from '../assets/images/imagenb2.webp';
import imagenTodos from '../assets/images/historia.webp';
import '../styles/PropertyMenu.css';

const PropertyMenu = () => {
  return (
    <div className="property-menu">
      <div className="property-menu-row">
        <Link to="/properties/rent" className="property-menu-item" style={{ backgroundImage: `url(${imagenArriendo})` }}>
          <div className="menu-content">
            <h3>INMUEBLES EN ARRIENDO</h3>
          </div>
        </Link>
        <Link to="/properties/sale" className="property-menu-item" style={{ backgroundImage: `url(${imagenVenta})` }}>
          <div className="menu-content">
            <h3>INMUEBLES EN VENTA</h3>
          </div>
        </Link>
      </div>
      <Link to="/properties/all" className="property-menu-item full-width" style={{ backgroundImage: `url(${imagenTodos})` }}>
        <div className="menu-content">
          <h3>VER TODOS LOS INMUEBLES</h3>
        </div>
      </Link>
    </div>
  );
};

export default PropertyMenu;