import React, { useContext } from "react";
import ButtonComp from "../ButtonComp/ButtonComp";
import CartItemComp from "../CartItem/CartItemComp";
import { CartContext } from "../../contexts/CartContext";
import "./cart-dropdown.styles.scss";
import { useNavigate } from "react-router-dom";
// import {  Link } from "react-router-dom";

function CartDropDownComp() {
  //   const cartData = [
  //     { name: "Shoes", quantity: 12 },
  //     { name: "Jacket", quantity: 8 },
  //     { name: "Cap", quantity: 7 },
  //   ];
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/CheckOut");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItemComp key={item.id} cartItem={item} />
        ))}
      </div>
      {/*

optimizing this use of link part by useNavigate hook  from react-router-dom

      <Link className="nav-link" to="/CheckOut">
        <ButtonComp>CHECKOUT</ButtonComp>
      </Link>
        */}
      <ButtonComp onClick={goToCheckoutHandler}>CHECKOUT</ButtonComp>
    </div>
  );
}

export default CartDropDownComp;
