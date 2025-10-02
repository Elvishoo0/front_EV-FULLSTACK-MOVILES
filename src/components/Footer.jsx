import React from 'react';
import './../public/styles.css';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong><span>HuertoHogar 2025</span></strong>. Todos los derechos reservados.
        </div>
        <div className="credits">
          Diseñado con la plantilla{" "}
          <a href="https://bootstrapmade.com/">Squadfree</a> de BootstrapMade
        </div>
      </div>
    </footer>
  );
}
