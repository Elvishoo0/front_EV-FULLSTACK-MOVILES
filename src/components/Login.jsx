
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  
  const API_URL = process.env.REACT_APP_API_URL;

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_URL}/api/login`, { // Ajusta esta URL a tu endpoint de login en Spring
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // La API de Spring debería devolver los datos del usuario y quizás un token
        login(data); // Guardamos el usuario en el contexto
        navigate('/admin'); // Redirigimos al panel de administración
      } else {
        setError(data.message || 'Credenciales incorrectas. Por favor, intenta de nuevo.');
      }
    } catch (err) {
      setError('No se pudo conectar al servidor. Por favor, intenta más tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{ paddingTop: '150px' }}>
      <div className="container">
        <div className="content-box">
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleLogin} style={{ maxWidth: '500px', margin: '0 auto' }}>
            <div className="form-group" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Email:</label>
              <input 
                type="email" 
                id="email"
                className="form-control" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }}
              />
            </div>
            <div className="form-group" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
              <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Contraseña:</label>
              <input 
                type="password" 
                id="password"
                className="form-control" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px' }}
              />
            </div>
            {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
            <button type="submit" className="cta-btn" style={{ border: 'none' }} disabled={loading}>
              {loading ? 'Iniciando...' : 'Iniciar Sesión'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
