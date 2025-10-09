
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from './ProtectedRoute'; // Importamos la ruta protegida
import Header from "./Header";
import HeroMain from "./HeroMain";
import Footer from "./Footer";
import ScrollTopButton from "./ScrollTopButton";
import ShoppingCart from './ShoppingCart';
import Login from './Login';
import AdminPanel from './AdminPanel';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={<HeroMain />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/login" element={<Login />} />

            {/* Ruta protegida para el panel de administración */}
            <Route path="/admin" element={<ProtectedRoute />}>
              <Route index element={<AdminPanel />} />
            </Route>
            
          </Routes>
        </main>
        <Footer />
        <ScrollTopButton />
      </Router>
    </AuthProvider>
  );
}

export default App;
