import React, { useContext } from "react";
import { ReactComponent as ShoppingBag } from "./../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { CartContext } from "../../contexts/CartContext";
function CartIconComp() {
  const { cartState, setCartState, cartItems, cartCount } =
    useContext(CartContext);
  // let count = 0;
  // cartItems.map((cartItem) => {
  //   count += cartItem.quantity;
  // });

  return (
    <div
      className="cart-icon-container"
      onClick={() => {
        setCartState(!cartState);
      }}
    >
      <ShoppingBag className="shoppping-icon" />

      <span className="item-count">{cartCount}</span>
    </div>
  );
}

export default CartIconComp;
