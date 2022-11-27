import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.styles.scss";
function Navbar({ stocks }) {
  return (
    <div className="Navbar">
      <img
        src="https://img.icons8.com/external-sbts2018-outline-color-sbts2018/58/000000/external-piggybank-cryptocurrency-sbts2018-outline-color-sbts2018.png"
        alt="logo"
      />

      <div className="nav-links-container">
        <Link className="nav-link" to="/">
          Home
        </Link>
        {/* finsh the link */}
        <Link className="nav-link" to="/buyernest">
          Buyer Nest
        </Link>
        {/* need to get the learn page */}
        <Link className="nav-link" to="/">
          Learn
        </Link>

        <Link className="nav-link" to="/">
          News
        </Link>

        <Link className="nav-link" to="/support">
          Support
        </Link>
      </div>
      <div className="user-login">
        <Link className="nav-link" to="/login">
          Sign in
        </Link>

        <Link className="nav-link" to="/signup">
          Sign up
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
