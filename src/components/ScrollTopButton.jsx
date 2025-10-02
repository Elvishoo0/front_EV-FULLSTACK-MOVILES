import React, { useEffect, useState } from 'react';
// Importa estilos si son específicos de este componente (usando CSS Modules o importación normal si son globales)
// import './ScrollTopButton.css'; // Ejemplo si usas CSS Modules

function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Función para mostrar/ocultar el botón basada en el scroll
  const toggleVisibility = () => {
    if (window.scrollY > 300) { // Ajusta 300px según cuándo quieras que aparezca el botón
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Función para hacer scroll suave hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Desplazamiento suave
    });
  };

  // Añade y limpia el listener de scroll
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); // Se ejecuta solo una vez al montar

  return (
    // Renderiza el botón solo si isVisible es true
    isVisible && (
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center active" // Mantén tus clases CSS existentes
        onClick={scrollToTop}
        // style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }} // Ejemplo de estilos inline si no usas CSS
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    )
  );
}

export default ScrollTopButton;
