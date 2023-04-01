import React from "react";
import "./product-card.styles.scss";
import ButtonComp from "./../ButtonComp/ButtonComp.js";
function ProductCard({ product }) {
  const { id, name, imageUrl, price } = product;
  return (
    <div key={id} className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <ButtonComp buttonType={"inverted"}>Add to Cart</ButtonComp>
    </div>
  );
}

export default ProductCard;
