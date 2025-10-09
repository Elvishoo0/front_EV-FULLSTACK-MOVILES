
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll handler to manage header state (visibility and background)
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Add background when scrolled past a certain point
    setScrolled(currentScrollY > 50);

    // Determine scroll direction to hide/show header
    if (currentScrollY > lastScrollY && currentScrollY > 150) {
      setHidden(true); // Scrolling down
    } else {
      setHidden(false); // Scrolling up
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Dynamically build the class string for the header
  const headerClasses = `fixed-top ${scrolled ? 'header-scrolled' : ''} ${hidden ? 'header-hidden' : ''}`;

  return (
    // The main header element with dynamic classes for scroll effects
    <header id="header" className={headerClasses}>
      {/* 
        The container div is now the flex container responsible for layout.
        We've REMOVED the conflicting 'justify-content-between' class.
      */}
      <div className="container header-container">
        
        {/* Logo is now wrapped for better control */}
        <div className="logo-wrapper">
          <h1 className="logo"><Link to="/">HuertoHogar</Link></h1>
        </div>
        
        {/* Navbar remains, to be stacked below the logo via CSS */}
        <nav id="navbar" className="navbar">
          <ul>
            <li><Link className="nav-link scrollto active" to="/">Inicio</Link></li>
            <li><a className="nav-link scrollto" href="#mision">Nuestra Misión</a></li>
            <li><a className="nav-link scrollto" href="#vision">Nuestra Visión</a></li>
            <li><a className="nav-link scrollto" href="#distribucion">Distribución</a></li>
            <li><a className="nav-link scrollto" href="#tienda">Tienda</a></li>
            <li><Link className="nav-link" to="/cart">Carrito</Link></li>
            <li><Link className="nav-link" to="/login">Login</Link></li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;
