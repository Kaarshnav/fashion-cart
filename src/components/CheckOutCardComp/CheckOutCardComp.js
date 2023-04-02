import React, { useContext } from "react";
import "./CheckOutCardComp.styles.scss";
import { CartContext } from "../../contexts/CartContext";

function CheckOutCardComp({ item }) {
  const { id, name, price, quantity, imageUrl } = item;
  const { decItemsQtyToCart, incItemsQtyToCart, removeItemFromCart } =
    useContext(CartContext);
  const quantityIncHandler = () => incItemsQtyToCart(item);
  const quantityDecHandler = () => decItemsQtyToCart(item);
  const quantityRemoveHandler = () => removeItemFromCart(item);

  return (
    <div className="checkout-item-container">
      <img className="checkout-item-img" src={imageUrl} alt={name} />
      <div className="checkout-item-details">
        <h2>{name}</h2>
        <h2>{price}</h2>
        <button onClick={quantityIncHandler}>inc</button>
        <h2>{quantity}</h2>
        <button onClick={quantityDecHandler}>dec</button>
      </div>
      <div className="checkout-item-remove">
        <button onClick={quantityRemoveHandler}>remove</button>
      </div>
    </div>
  );
}

export default CheckOutCardComp;
