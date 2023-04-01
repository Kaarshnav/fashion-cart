import { createContext, useState } from "react";

//as actual val of context u want to access
export const CartContext = createContext({
  cartState: false,
  setCartState: () => null,
});

// provider  is actual component

export const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState(false);
  const value = { cartState, setCartState };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
