
import React, { useState, useEffect } from 'react';
import { useShoppingCart } from '../hooks/useShoppingCart';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useShoppingCart();
  
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // La ruta a tus productos en la API de Spring
        const response = await fetch(`${API_URL}/api/productos`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [API_URL]); // El efecto se ejecuta si la URL de la API cambia

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar productos: {error}</p>;

  return (
    <section id="productos" className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
       <div style={{ marginBottom: '40px' }}>
         <h2 style={{ fontFamily: '\'Playfair Display\', serif', color: '#8B4513', fontSize: '34px' }}>Nuestros Productos</h2>
         <p>Productos frescos y orgánicos, directamente de nuestra granja a tu mesa.</p>
       </div>
       <div style={{
         display: 'grid',
         gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
         gap: '30px'
       }}>
        {products.map(product => (
          <div key={product.id} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <h3 style={{ fontFamily: '\'Playfair Display\', serif', color: '#8B4513', marginBottom: '10px' }}>{product.name}</h3>
              <p style={{ color: '#333', marginBottom: '15px' }}>{product.description}</p>
              <p style={{ fontWeight: 'bold', color: '#2E8B57', fontSize: '1.2rem' }}>${product.price.toFixed(2)}</p>
            </div>
            <button 
              onClick={() => addToCart(product)}
              className="cta-btn"
              style={{ border: 'none', alignSelf: 'center', marginTop: '15px' }}
            >
              Añadir al Carrito
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
