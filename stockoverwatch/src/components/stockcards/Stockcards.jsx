import React from "react";
import "./Stockcards.styles.scss";
function Stockcards({ stocks }) {
  const findTopFourStocks = (arr) => {
    return arr
      .sort((a, b) => {
        return a.o - a.c - (b.o - b.c);
      })
      .slice(0, 4);
  };
  const topFour = findTopFourStocks(stocks);
  const diffNum = (opening, current) => {
    return (opening - current).toFixed(2);
  };
  return (
    <div className="Stockcards-container">
      {topFour.map((stock) => {
        return (
          <div key={stock.symbol}>
            <div className="stock-header">
              <span>{stock.symbol}</span>
              <span>{stock.c} USD</span>
            </div>
            <div className="stock-footer">
              {diffNum(stock.o, stock.c) > 0 ? (
                <span>nice</span>
              ) : (
                <span>notnice</span>
              )}
              <span>today</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Stockcards;
