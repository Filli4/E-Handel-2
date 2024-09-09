import React, { createContext, useState, useEffect } from 'react';

// Create a context for the cart
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // State for managing cart items, initialize with items from localStorage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // useEffect to save cart items to localStorage whenever cartItems state changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add items to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if the item already exists in the cart
      const existingProductIndex = prevItems.findIndex(item => item.id === product.id);
      if (existingProductIndex >= 0) {
        // If it exists, increment the quantity
        const updatedItems = [...prevItems];
        updatedItems[existingProductIndex].quantity += 1;
        return updatedItems;
      }
      // If not, add the product to the cart with a quantity of 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Provide cartItems, addToCart, and setCartItems to the rest of the app
  return (
    <CartContext.Provider value={{ cartItems, addToCart, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
