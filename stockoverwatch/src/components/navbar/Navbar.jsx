import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.styles.scss";
import "./Stockcards.styles.scss";

function Navbar({ stocks }) {
  const findTopSixStocks = (arr) => {
    return arr
      .sort((a, b) => {
        return a.o - a.c - (b.o - b.c);
      })
      .slice(0, 6);
  };
  const topSix = findTopSixStocks(stocks);
  const diffNum = (opening, current) => {
    return (current - opening).toFixed(2);
  };
  const gainLossRatio = (opening, current) => {
    return Math.abs((((current - opening) / opening) * 100).toFixed(2));
  };
  return (
    <>
      <div className="Stockcards-container">
        {topSix.map((stock) => {
          return (
            <div key={stock.symbol} id="cards">
              <div className="stock-header">
                <div className="stock-name">
                  <span>{stock.symbol}</span>
                </div>
                <div className="stock-price">
                  <span>{stock.c.toFixed(2)}</span>
                  <span className="currency">USD</span>
                </div>
              </div>
              <div className="stock-footer">
                {diffNum(stock.o, stock.c) > 0 ? (
                  <>
                    <span className="green-num">
                      +{diffNum(stock.o, stock.c)}
                    </span>
                    <span className="green-num">
                      ({gainLossRatio(stock.o, stock.c)}%) &uarr;
                    </span>
                  </>
                ) : (
                  <>
                    <span className="red-num">
                      {diffNum(stock.o, stock.c)}{" "}
                    </span>
                    <span className="red-num">
                      ({gainLossRatio(stock.o, stock.c)}%) &darr;
                    </span>
                  </>
                )}
                <span className="today">today</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="Navbar">
        <img
          src="https://img.icons8.com/external-sbts2018-outline-color-sbts2018/58/000000/external-piggybank-cryptocurrency-sbts2018-outline-color-sbts2018.png"
          alt="logo"
        />

        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            Home
          </Link>

          <Link className="nav-link" to="/buyernest">
            Buyer Nest
          </Link>

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
    </>
  );
}

export default Navbar;
