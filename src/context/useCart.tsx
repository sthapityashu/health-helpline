import React, { createContext, useState, useContext } from "react";

const CartContext = createContext<any>(null);

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [cartTotal, setCartTotal] = useState(0);

  const addToCart = (item: any) => {
    setCartItems([...cartItems, item]);
    setCartTotal(cartTotal + parseInt(item.price));
  };

  const removeFromCart = (item: any) => {
    setCartItems(cartItems.filter((i) => i.id !== item.id));
    setCartTotal(cartTotal - parseInt(item.price));
  };

  const clearCart = () => {
    setCartItems([]);
    setCartTotal(0);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, cartTotal, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
