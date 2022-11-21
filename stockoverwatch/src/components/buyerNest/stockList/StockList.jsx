import React, { Fragment } from "react";
import "./StockList.styles.scss";
function StockList({ stocks, monthlyPrice }) {
  console.log("monthly price", monthlyPrice);
  console.log("current price", stocks);
  return (
    <div className="StockList">
      <div className="current-price">
        <ul>
          {stocks.map((stock, i) => {
            return (
              <Fragment key={i}>
                <li>{stock.symbol}</li>
                <li>Current price: {stock.c}</li>
                <li>Change: {stock.d}</li>
                <li>Percent change: {(stock.dp * 10).toFixed(2)}%</li>
                <li>High price: {stock.h}</li>
                <li>Low price: {stock.l}</li>
                <li>Open price: {stock.o}</li>
                <li>Previous close price: {stock.pc}</li>
              </Fragment>
            );
          })}
        </ul>
      </div>
      <div className="monthly-price"></div>
    </div>
  );
}

export default StockList;
