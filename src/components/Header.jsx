import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    // Handle header background change
    if (currentScrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Handle header visibility
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down
      setHidden(true);
    } else {
      // Scrolling up
      setHidden(false);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header id="header" className={`fixed-top ${scrolled ? 'header-scrolled' : ''} ${hidden ? 'header-hidden' : ''}`}>
      <div className="container">
        {/* Logo centered */}
        <div className="logo-container">
          <h1 className="logo"><a href="index.html">HuertoHogar</a></h1>
        </div>
        
        {/* Navbar centered below logo */}
        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Inicio</a></li>
            <li><a className="nav-link scrollto" href="#mision">Nuestra Misión</a></li>
            <li><a className="nav-link scrollto" href="#vision">Nuestra Visión</a></li>
            <li><a className="nav-link scrollto" href="#distribucion">Distribución</a></li>
            <li><a className="nav-link scrollto" href="#tienda">Tienda</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
