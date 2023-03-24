import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
const NavigationBar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-link" to="/">
          <div>logo</div>
        </Link>

        <div className="link-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
