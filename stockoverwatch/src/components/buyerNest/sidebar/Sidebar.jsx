import React from "react";
import { Outlet } from "react-router";
import { valid } from "semver";
import "./sidebar.styles.scss";
import { Sidedata } from "./Sidedata.jsx";
function Sidebar({ stocks }) {
  return (
    <div className="buyernest-container">
      <div className="sidebar-container">
        <div className="logo">
          <img
            src="https://img.icons8.com/external-sbts2018-outline-color-sbts2018/58/000000/external-piggybank-cryptocurrency-sbts2018-outline-color-sbts2018.png"
            alt="logo"
          />
        </div>
        <ul className="sidebar-list">
          {Sidedata.map((data, i) => {
            return (
              <li
                key={i}
                className="row"
                id={window.location.pathname === valid.link ? "active" : ""}
                onClick={() => {
                  window.location.pathname = data.link;
                }}
              >
                <div id="icon">{data.icon}</div>
                <div id="title">{data.title}</div>
              </li>
            );
          })}
        </ul>
        <div className="footer">Support</div>
        <div className="icon-footer">
          <div className="footer-logo">
            <img
              src="https://img.icons8.com/external-sbts2018-outline-color-sbts2018/58/000000/external-piggybank-cryptocurrency-sbts2018-outline-color-sbts2018.png"
              alt="logo"
            />
          </div>
          <div className="app-blah">
            <h5 className="get-app">Get the app</h5>
            <h5>iPhone &#8226; Android</h5>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Sidebar;
