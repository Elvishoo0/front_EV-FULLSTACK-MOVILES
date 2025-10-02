import React from "react";
import Header from "./Header";
import HeroMain from "./HeroMain";
import Footer from "./Footer";
import ScrollTopButton from "./ScrollTopButton"; // Importa el nuevo componente
import './../public/styles.css'; // Asegúrate de que esta importación global esté aquí

function App() {
  return (
    <>
      <Header />
      <HeroMain />
      {/* ... otras secciones ... */}
      <Footer />

      {/* Renderiza el componente del botón */}
      <ScrollTopButton />
    </>
  );
}

export default App;
