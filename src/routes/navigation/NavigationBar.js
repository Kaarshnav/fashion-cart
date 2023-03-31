import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as KalashLogo } from "./../../assets/crown.svg";
import "./navigation.styles.scss";
const NavigationBar = () => {
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
        <div className="signin-container">
          <Link className="signin-link" to="/Authentication">
            Signin
          </Link>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
