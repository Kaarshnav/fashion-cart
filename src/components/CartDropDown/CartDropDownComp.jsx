import React from "react";
import ButtonComp from "../ButtonComp/ButtonComp";
import "./cart-dropdown.styles.scss";
function CartDropDownComp() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <ButtonComp buttonType={"inverted"}> CHECKOUT</ButtonComp>
    </div>
  );
}

export default CartDropDownComp;
