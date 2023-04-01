import React, { useContext } from "react";
import { ReactComponent as ShoppingBag } from "./../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { CartContext } from "../../contexts/CartContext";
function CartIconComp() {
  const { cartState, setCartState } = useContext(CartContext);
  return (
    <div
      className="cart-icon-container"
      onClick={() => {
        setCartState(!cartState);
      }}
    >
      <ShoppingBag className="shoppping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

export default CartIconComp;
