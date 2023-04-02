import { createContext, useState, useEffect } from "react";

//as actual val of context u want to access

const incItemQtyHelper = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
};
const decItemQtyHelper = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};
const removeItemHelper = (cartItems, productToAdd) => {
  return cartItems.filter((item) => item.id !== productToAdd.id);
};
const addCartItemHelper = (cartItems, productToAdd) => {
  // if already found inc count , else create product in cart with qty

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //   if (cartItems?.length) {
  //     for (let x = 0; x <= cartItems.length; x++) {
  //       if (cartItems[x]?.id === productToAdd.id) {
  //         cartItems[x].quantity++;
  //         return cartItems;
  //       }
  //     }
  //   }
  //   cartItems.push({ ...productToAdd, quantity: 1 });
  //   return cartItems;
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
export const CartContext = createContext({
  cartState: false,
  setCartState: () => null,
  cartItems: [],
  addItemsToCart: () => {},
  cartCount: 0,
  incItemsQtyToCart: () => {},
  decItemsQtyToCart: () => {},
  removeItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addItemsToCart = (productToAdd) => {
    setCartItems(addCartItemHelper(cartItems, productToAdd));
  };
  const incItemsQtyToCart = (productToAdd) => {
    setCartItems(incItemQtyHelper(cartItems, productToAdd));
  };
  const decItemsQtyToCart = (productToAdd) => {
    setCartItems(decItemQtyHelper(cartItems, productToAdd));
  };
  const removeItemFromCart = (productToAdd) => {
    setCartItems(removeItemHelper(cartItems, productToAdd));
  };
  useEffect(() => {
    let count = 0;
    cartItems.map((cartItem) => {
      count += cartItem.quantity;
    });
    //  in this fn commented way is their which i don't prefer
    // const newCartCount = cartItems.reduce(
    //   (total, cartItem) => total + cartItem.quantity,
    //   0
    // );
    setCartCount(count);
  }, [cartItems]);
  const value = {
    cartState,
    setCartState,
    addItemsToCart,
    cartItems,
    cartCount,
    incItemsQtyToCart,
    decItemsQtyToCart,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
