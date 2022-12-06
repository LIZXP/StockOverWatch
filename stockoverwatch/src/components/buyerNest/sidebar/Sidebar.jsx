import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { valid } from "semver";
import "./sidebar.styles.scss";
import { Sidedata } from "./Sidedata.jsx";
import useUserProfile from "../../../userProfile";

function Sidebar({ stocks }) {
  const { getUserProfile } = useUserProfile();
  const [totalFunds, setTotalFunds] = useState(0);

  useEffect(() => {
    getUserProfile()
      .then((profile) => {
        setTotalFunds(parseFloat(profile.funds));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
                onClick={(e) => {
                  e.preventDefault();
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
        <div className="user-balance">
          Current Balance:{totalFunds.toFixed(2)}
        </div>
        <div className="icon-footer">
          <div className="footer-logo">
            <img
              src="https://img.icons8.com/external-sbts2018-outline-color-sbts2018/58/000000/external-piggybank-cryptocurrency-sbts2018-outline-color-sbts2018.png"
              alt="logo"
            />
          </div>
          <div className="app-blah">
            <span className="get-app">Get the app</span>
            <span>iPhone &#8226; Android</span>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Sidebar;
