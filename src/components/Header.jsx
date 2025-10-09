
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Importamos el hook de autenticación

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { isAuthenticated, logout, user } = useAuth(); // Obtenemos el estado y funciones de autenticación
  const navigate = useNavigate();

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrolled(currentScrollY > 50);
    if (currentScrollY > lastScrollY && currentScrollY > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirigimos al inicio después de cerrar sesión
  };

  const headerClasses = `fixed-top ${scrolled ? 'header-scrolled' : ''} ${hidden ? 'header-hidden' : ''}`;

  return (
    <header id="header" className={headerClasses}>
      <div className="container header-container">
        <div className="logo-wrapper">
          <h1 className="logo"><Link to="/">HuertoHogar</Link></h1>
        </div>
        
        <nav id="navbar" className="navbar">
          <ul>
            <li><Link className="nav-link scrollto active" to="/">Inicio</Link></li>
            <li><a className="nav-link scrollto" href="#productos">Productos</a></li>
            <li><Link className="nav-link" to="/cart">Carrito</Link></li>
            
            {/* -- Lógica de Autenticación -- */}
            {isAuthenticated ? (
              <>
                <li><Link className="nav-link" to="/admin">Panel Admin</Link></li>
                <li>
                  {/* Usamos un botón con estilo de enlace para el logout */}
                  <a href="#!" onClick={handleLogout} className="nav-link">Cerrar Sesión</a>
                </li>
              </>
            ) : (
              <li><Link className="nav-link" to="/login">Login</Link></li>
            )}
            {/* -- Fin de Lógica de Autenticación -- */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
