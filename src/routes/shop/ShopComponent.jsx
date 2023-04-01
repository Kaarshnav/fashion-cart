import React, { useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
// import SHOP_DATA from "./../../mocks/shop-data.json";
import "./shop.styles.scss";
import { ProductsContext } from "./../../contexts/ProductsContext";
function ShopComponent() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}

      {/*
    {SHOP_DATA.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
        </div>
      ))}


      converting static data to data from context so thatw e can update from any screen 
    */}
    </div>
  );
}

export default ShopComponent;
