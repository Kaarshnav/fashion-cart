import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CheckOutCardComp from "../../components/CheckOutCardComp/CheckOutCardComp";
import "./checkout.styles.scss";
function CheckOutPage() {
  const { cartItems } = useContext(CartContext);

  let total = 0;
  cartItems.map((item) => {
    total += item.price * item.quantity;
  });
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckOutCardComp item={item} key={item.id} />
      ))}
      <span className="total">Total : {total}</span>
    </div>
  );
}

export default CheckOutPage;
