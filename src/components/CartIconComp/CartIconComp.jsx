import React from "react";
import { ReactComponent as ShoppingBag } from "./../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

function CartIconComp() {
  return (
    <div className="cart-icon-container">
      <ShoppingBag className="shoppping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

export default CartIconComp;
