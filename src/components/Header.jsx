import React from 'react';

export default function Header() {
  return (
    <header id="header" className="fixed-top header-transparent">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <h1 className="text-light">
            <a href="index.html">
              <span>HuertoHogar</span>
            </a>
          </h1>
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">Inicio</a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#mision">Nuestra Misión</a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#vision">Nuestra Visión</a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#locations">Distribución</a>
            </li>
            <li>
              <a className="nav-link" href="productos.html">Tienda</a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
