
import { useState, useEffect } from 'react';

const getCartFromLocalStorage = () => {
  try {
    const cart = localStorage.getItem('shoppingCart');
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error("Failed to parse cart from localStorage", error);
    return [];
  }
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem('shoppingCart', JSON.stringify(cart));
};

export const useShoppingCart = () => {
  const [cart, setCart] = useState(getCartFromLocalStorage());

  useEffect(() => {
    // Cada vez que el carrito cambie, lo guardamos en localStorage
    saveCartToLocalStorage(cart);
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        // Si el producto ya existe, actualiza la cantidad
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        // Si es un producto nuevo, lo añade al carrito
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      // Si la cantidad es cero o menos, elimina el producto
      removeFromCart(productId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return { cart, addToCart, removeFromCart, updateQuantity, clearCart };
};
