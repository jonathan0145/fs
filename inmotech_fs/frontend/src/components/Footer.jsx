import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <span>INMOTECH 2024 Todos los derechos reservados.</span>
        </div>
        <div className="footer-right">
          <Link to="/terminos">Terminos y condiciones</Link>
          <Link to="/privacidad">Aviso de privacidad</Link>
          <Link to="/cookies">cookies</Link>
        </div>
      </div>
      <div className="footer-disclaimer">
        <p>Usar este sitio implica que aceptas nuestras Políticas y Términos, Aviso de privacidad y Política de datos. Prohibida su reproducción total o parcial, así como su traducción a cualquier idioma sin autorización escrita de su titular.</p>
      </div>
    </footer>
  );
};

export default Footer;