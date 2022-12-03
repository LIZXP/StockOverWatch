import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.styles.scss";
import { useAuth, } from "../../contexts/AuthContext";

function Navbar({ stocks }) {
  const auth = useAuth();
  const { logout } = useAuth();
  const isLoggedIn = auth.currentUser !== null;
  const isLoggedOut = auth.currentUser === null;

  return (
    <div className="Navbar">
      <img
        src="https://img.icons8.com/external-sbts2018-outline-color-sbts2018/58/000000/external-piggybank-cryptocurrency-sbts2018-outline-color-sbts2018.png"
        alt="logo"
      />


      <div className="nav-title">
        ~STOCK OVERWATCH~
      </div>
      {isLoggedIn && (<>
        <Link className="nav-link" to="/buyernest/insights">
          Buyer Nest
        </Link>

        <Link className="nav-link" to="/learn">
          Learn
        </Link>

        <Link className="nav-link" to="/news">
          News
        </Link>

        <Link className="nav-link" to="/account">
          Account
        </Link>

        <Link className="nav-link" to="/support">
          Support
        </Link>
      </>)}


      {isLoggedOut && (<>
        <Link className="nav-link" to="/login">
          Sign in
        </Link>

        <Link className="nav-link" to="/signup">
          Sign up
        </Link>
      </>)}
      {isLoggedIn && (<>
        <form className="logout" onSubmit={logout} >
          <button className="logout-btn" type="submit" to="/login">
            Log out
          </button>
        </form></>)}

      <Outlet />
    </div>
  );
}

export default Navbar;