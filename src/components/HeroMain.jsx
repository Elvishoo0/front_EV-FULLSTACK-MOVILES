import React from 'react';
import './../public/styles.css';


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
          {/* 🔽 Aquí están las secciones internas */}
          <section id="mision" className="about">
            <div className="container on-top">
              <div className="row no-gutters">
                <div className="content col-xl-5 d-flex align-items-stretch">
                  <div className="content-box on-top">
                    <h3 className="text-super-top">Nuestra Misión</h3>
                    <p className="text-super-top">
                      Proporcionar productos frescos y de calidad directamente desde el campo hasta
                      la puerta de nuestros clientes...
                    </p>
                    <a href="#vision" className="about-btn text-super-top">
                      Nuestra Visión <i className="bx bx-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <section id="vision" className="cta">
            <div className="container on-top">
              <div className="row no-gutters">
                <div className="content col-xl-5 d-flex align-items-stretch ms-auto">
                  <div className="content-box on-top">
                    <h3 className="text-super-top">Nuestra Visión</h3>
                    <p className="text-super-top">
                      Ser la tienda online líder en la distribución de productos frescos y naturales en Chile...
                    </p>
                    <a href="#locations" className="cta-btn text-super-top">
                      Puntos de Distribución <i className="bx bx-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <section id="locations" className="contact section-bg">
            <div className="container on-top">
              <div className="section-title">
                <h2 className="text-super-top">Puntos de Distribución</h2>
                <p className="text-super-top">
                  Operamos en más de 9 puntos a lo largo del país, incluyendo ciudades como Santiago, Puerto Montt...
                </p>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
  