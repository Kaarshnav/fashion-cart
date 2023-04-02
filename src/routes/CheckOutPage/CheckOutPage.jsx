import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CheckOutCardComp from "../../components/CheckOutCardComp/CheckOutCardComp";

function CheckOutPage() {
  const { cartItems } = useContext(CartContext);

  let total = 0;
  cartItems.map((item) => {
    total += item.price * item.quantity;
  });
  return (
    <div>
      {cartItems.map((item) => (
        <CheckOutCardComp item={item} />
      ))}
      <div>
        <h1>Total</h1>
        <h2>{total}</h2>
      </div>
    </div>
  );
}

export default CheckOutPage;
