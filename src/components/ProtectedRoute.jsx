
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Este componente envuelve las rutas que queremos proteger.
const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  // Si el usuario está autenticado, renderiza el componente hijo (ej: <AdminPanel />).
  // Si no, lo redirige a la página de login.
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
