import React, { useContext } from "react";
// import "./CheckOutCardComp.styles.scss";
import "./checkout-item.styles.scss";
import { CartContext } from "../../contexts/CartContext";

function CheckOutCardComp({ item }) {
  const { name, price, quantity, imageUrl } = item;
  const { decItemsQtyToCart, incItemsQtyToCart, removeItemFromCart } =
    useContext(CartContext);
  const quantityIncHandler = () => incItemsQtyToCart(item);
  const quantityDecHandler = () => decItemsQtyToCart(item);
  const quantityRemoveHandler = () => removeItemFromCart(item);

  return (
    <div className="checkout-item-container">
      <img className="image-container" src={imageUrl} alt={name} />

      <span className="name">{name}</span>

      {/*  <button onClick={quantityIncHandler}>inc</button>*/}
      <span className="quantity">
        {/* arrows code in html , to represent down arrow , up arrow and x icon  */}
        <div className="arrow" onClick={quantityDecHandler}>
          &#10094;
        </div>

        <span className="value">{quantity}</span>
        <div className="arrow" onClick={quantityIncHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      {/*   <button onClick={quantityDecHandler}>dec</button>*/}

      <div className="remove-button">
        {/* <button onClick={quantityRemoveHandler}>remove</button>*/}
        <div onClick={quantityRemoveHandler}> &#10005;</div>
      </div>
    </div>
  );
}

export default CheckOutCardComp;
