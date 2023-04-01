import React, { useContext } from "react";
import ButtonComp from "../ButtonComp/ButtonComp";
import CartItemComp from "../CartItem/CartItemComp";
import { CartContext } from "../../contexts/CartContext";
import "./cart-dropdown.styles.scss";
function CartDropDownComp() {
  //   const cartData = [
  //     { name: "Shoes", quantity: 12 },
  //     { name: "Jacket", quantity: 8 },
  //     { name: "Cap", quantity: 7 },
  //   ];
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItemComp key={item.id} cartItem={item} />
        ))}
      </div>
      <ButtonComp> CHECKOUT</ButtonComp>
    </div>
  );
}

export default CartDropDownComp;
