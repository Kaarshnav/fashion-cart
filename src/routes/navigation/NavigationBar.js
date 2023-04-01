import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as KalashLogo } from "./../../assets/crown.svg";
import { UserContext } from "../../contexts/userContext";
import { CartContext } from "../../contexts/CartContext";
import { signOutUser } from "../../utils/firebase/firebase";
import "./navigation.styles.scss";
import CartIconComp from "../../components/CartIconComp/CartIconComp";
import CartDropDownComp from "../../components/CartDropDown/CartDropDownComp";
const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  const { cartState } = useContext(CartContext);

  // accesing current user from context
  // const signOutHandlerForContext = async () => {
  // await signOutUser();
  // setCurrentUser(null);
  // };
  // console.log("---- curr user---", currentUser);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <KalashLogo />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/Authentication">
              Signin
            </Link>
          )}

          <CartIconComp />
        </div>

        {cartState && <CartDropDownComp />}
      </div>

      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
