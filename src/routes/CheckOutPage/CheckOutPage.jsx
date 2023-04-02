import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CheckOutCardComp from "../../components/CheckOutCardComp/CheckOutCardComp";

function CheckOutPage() {
  const { cartItems, set } = useContext(CartContext);
  return (
    <div>
      {cartItems.map((item) => (
        <CheckOutCardComp item={item} />
      ))}
    </div>
  );
}

export default CheckOutPage;
