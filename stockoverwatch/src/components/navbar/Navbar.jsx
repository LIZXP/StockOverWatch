import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.styles.scss";
function Navbar() {
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

        <Link className="nav-link" to="/">
          Buyer Nest
        </Link>

        <Link className="nav-link" to="/">
          Learn
        </Link>

        <Link className="nav-link" to="/">
          News
        </Link>

        <Link className="nav-link" to="/">
          Support
        </Link>
      </div>
      <div className="user-login">
        <Link className="nav-link" to="/">
          Sign in
        </Link>

        <Link className="nav-link" to="/">
          Sign up
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
