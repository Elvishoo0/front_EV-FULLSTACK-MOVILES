import React from 'react';
import ProductList from './ProductList'; // Importamos la lista de productos

export default function HeroMain() {
    return (
      <>
        <section id="hero">
          <div className="youtube-background">
            <iframe
              src="https://www.youtube.com/embed/48-1X9WxMvU?autoplay=1&mute=1&loop=1&playlist=48-1X9WxMvU&controls=0&showinfo=0&autohide=1&modestbranding=1"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
  
          <div className="hero-container on-top">
            <h1 className="text-super-top">Del Campo a tu Hogar</h1>
            <h2 className="text-super-top">
              Productos frescos, vida sana. Las mejores frutas y verduras, seleccionadas para ti.
            </h2>
            <a href="#mision" className="btn-get-started scrollto text-super-top">
              <i className="bx bx-chevrons-down"></i>
            </a>
          </div>
        </section>
  
        <main id="main">
          {/* Misión */}
          <section id="mision" className="about">
            <div className="container on-top">
              <div className="row no-gutters">
                <div className="content col-xl-5 d-flex align-items-stretch">
                  <div className="content-box on-top">
                    <h3>Nuestra Misión</h3>
                    <p>
                      Proporcionar productos frescos y de calidad directamente desde el campo hasta
                      la puerta de nuestros clientes...
                    </p>
                    <a href="#vision" className="about-btn">
                      Nuestra Visión <i className="bx bx-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Visión */}
          <section id="vision" className="cta">
            <div className="container on-top">
              <div className="row no-gutters">
                <div className="content col-xl-5 d-flex align-items-stretch ms-auto">
                  <div className="content-box on-top">
                    <h3>Nuestra Visión</h3>
                    <p>
                      Ser la tienda online líder en la distribución de productos frescos y naturales en Chile...
                    </p>
                    <a href="#productos" className="cta-btn">
                      Ver Productos <i className="bx bx-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* AQUÍ AÑADIMOS LA LISTA DE PRODUCTOS */}
          <ProductList />

          {/* Puntos de Distribución */}
          <section id="locations" className="contact section-bg">
            <div className="container on-top">
              <div className="section-title">
                <h2>Puntos de Distribución</h2>
                <p>
                  Operamos en más de 9 puntos a lo largo del país, incluyendo ciudades como Santiago, Puerto Montt...
                </p>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
