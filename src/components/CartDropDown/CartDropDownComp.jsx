import React from "react";
import ButtonComp from "../ButtonComp/ButtonComp";
import "./cart-dropdown.styles.scss";
function CartDropDownComp() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <ButtonComp> CHECKOUT</ButtonComp>
    </div>
  );
}

export default CartDropDownComp;
