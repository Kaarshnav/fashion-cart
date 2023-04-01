import { createContext, useState, useEffect } from "react";

import SHOP_DATA from "../mocks/shop-data.json";
//as actual val of context u want to access
export const ProductsContext = createContext({
  setProducts: () => null,
  products: [],
});

// provider  is actual component

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  const value = { products };
  // signOutUser();

  // returning unsubribe in useEffect , to stop listener whenever component unMounts

  // adding value in provider and wrapping whole app inside that , in that fashion whole app will be able to access the storage i.e context values
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
