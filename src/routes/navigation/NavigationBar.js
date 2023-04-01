import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as KalashLogo } from "./../../assets/crown.svg";
import { UserContext } from "../../contexts/userContext";
import { signOutUser } from "../../utils/firebase/firebase";
import "./navigation.styles.scss";
const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
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
        </div>

        {currentUser ? (
          <span className="nav-link" onClick={signOutUser}>
            Sign Out
          </span>
        ) : (
          <div className="signin-container">
            <Link className="signin-link" to="/Authentication">
              Signin
            </Link>
          </div>
        )}
      </div>

      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
