
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from "./Header";
import HeroMain from "./HeroMain";
import Footer from "./Footer";
import ScrollTopButton from "./ScrollTopButton";
import ShoppingCart from './ShoppingCart'; // Importa el componente del carrito
import Login from './Login'; // Importa el componente de login
import AdminPanel from './AdminPanel'; // Importa el componente del panel de admin

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HeroMain />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </main>
      <Footer />
      <ScrollTopButton />
    </Router>
  );
}

export default App;
