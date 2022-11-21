import React, { Fragment } from "react";
import "./StockList.styles.scss";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

function StockList({ stocks, monthlyPrice }) {
  console.log("monthly price", monthlyPrice);
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
      <div className="monthly-price-chart">
        {monthlyPrice.map((obj, i) => {
          const data = {
            labels: obj.t.map((timeStamp) => {
              const date = new Date(timeStamp * 1000);
              return date.toLocaleDateString("en-US");
            }),
            datasets: [
              {
                label: obj.symbol,
                data: obj.c.map((price) => {
                  return price;
                }),
              },
            ],
          };

          return (
            <Fragment key={i}>
              <Line data={data} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default StockList;
