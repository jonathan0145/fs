import React from 'react';
import { useParams } from 'react-router-dom';

function PropertyList({ type }) {
  return (
    <div className="property-list-container">
      <h2>
        {type === 'rent' && 'Inmuebles en Arriendo'}
        {type === 'sale' && 'Inmuebles en Venta'}
        {!type && 'Todos los Inmuebles'}
      </h2>
      <div className="property-grid">
        {/* Aquí irá el listado de propiedades */}
        {/* Por ahora es un placeholder */}
        <div className="property-placeholder">
          <p>Listado de propiedades {type || 'todas'}</p>
        </div>
      </div>
    </div>
  );
}

export default PropertyList;