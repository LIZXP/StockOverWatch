import React from "react";
import { Outlet } from "react-router";
import "./sidebar.styles.scss";

function Sidebar() {
  return (
    <div className="buyernest-container">
      <div className="sidebar">
        <div className="logo">
          <img
            src="https://img.icons8.com/external-sbts2018-outline-color-sbts2018/58/000000/external-piggybank-cryptocurrency-sbts2018-outline-color-sbts2018.png"
            alt="logo"
          />
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Sidebar;
