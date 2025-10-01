import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>HuertoHogar 2025</span></strong>. Todos los derechos reservados.
          </div>
          <div className="credits">
            Diseñado con la plantilla <a href="https://bootstrapmade.com/">Squadfree</a> de BootstrapMade
          </div>
        </div>
      </footer>

      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
};

export default Footer;
