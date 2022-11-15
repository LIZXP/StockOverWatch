import React from "react";
import "./Stockcards.styles.scss";

function Stockcards({ stocks }) {
  const findTopFourStocks = (arr) => {
    return arr
      .sort((a, b) => {
        return a.d > b.d;
      })
      .slice(0, 6);
  };
  const topFour = findTopFourStocks(stocks);
  const diffNum = (opening, current) => {
    return (current - opening).toFixed(2);
  };
  const gainLossRatio = (opening, current) => {
    return Math.abs((((current - opening) / opening) * 100).toFixed(2));
  };
  return (
    <div className="Stockcards-container">
      {topFour.map((stock) => {
        return (
          <div key={stock.symbol}>
            <div className="stock-header">
              <div className="stock-name">
                <span>{stock.symbol}</span>
              </div>
              <div className="stock-price">
                <span>{stock.c}</span>
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
                  <span className="red-num">{diffNum(stock.o, stock.c)} </span>
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
  );
}

export default Stockcards;
