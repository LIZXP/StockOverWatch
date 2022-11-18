import React from "react";
import { Outlet } from "react-router";
import "./sidebar.styles.scss";

function Sidebar() {
  return (
    <div className="buyernest-container">
      <div className="sidebar-container">
        <div className="nav-upper">
          <div className="nav-heading">
            <div className="logo">
              <img
                src="https://img.icons8.com/external-sbts2018-outline-color-sbts2018/58/000000/external-piggybank-cryptocurrency-sbts2018-outline-color-sbts2018.png"
                alt="logo"
              />
              <h2>StockOverWatch</h2>
            </div>
            <button className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Sidebar;
