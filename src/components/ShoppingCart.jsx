
import React from 'react';
import { useShoppingCart } from '../hooks/useShoppingCart'; // Importamos el hook

const ShoppingCart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useShoppingCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <section style={{ paddingTop: '150px' }}>
      <div className="container">
        <div className="content-box">
          <h2>Mi Carrito de Compras</h2>
          {cart.length === 0 ? (
            <p>Tu carrito está vacío.</p>
          ) : (
            <div style={{ textAlign: 'left' }}>
              {cart.map(item => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #eee' }}>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: '0 0 5px 0' }}>{item.name}</h4>
                    <p style={{ margin: 0, fontSize: '0.9rem' }}>Precio: ${item.price.toFixed(2)}</p>
                    <button onClick={() => removeFromCart(item.id)} style={{ color: 'red', background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontSize: '0.8rem' }}>
                      Eliminar
                    </button>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                     <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ padding: '5px 10px', border: '1px solid #ccc', cursor: 'pointer' }}>-</button>
                     <span>{item.quantity}</span>
                     <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ padding: '5px 10px', border: '1px solid #ccc', cursor: 'pointer' }}>+</button>
                  </div>
                  <p style={{ fontWeight: 'bold', margin: 0, width: '80px', textAlign: 'right' }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', fontSize: '1.2rem', fontWeight: 'bold' }}>
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div style={{ textAlign: 'center', marginTop: '2rem', display: 'flex', justifyContent: 'space-around' }}>
                 <button onClick={clearCart} className="cta-btn" style={{ border: 'none', background: '#8B4513' }}>Limpiar Carrito</button>
                 <button className="cta-btn" style={{ border: 'none' }}>Proceder al Pago</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
