import React, { Fragment } from "react";
import "./StockList.styles.scss";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

function StockList({ stocks, monthlyPrices }) {
  if (stocks.length === 0 || monthlyPrices.length === 0) {
    return null;
  }

  return (
    <div className="StockList">
      {stocks.map((stock, i) => {
        const monthlyPriceData = {
          labels: monthlyPrices[i].t.map((timeStamp) => {
            const date = new Date(timeStamp * 1000);
            return date.toLocaleDateString("en-US");
          }),
          datasets: [
            {
              label: monthlyPrices[i].symbol,
              data: monthlyPrices[i].c.map((price) => {
                return price;
              }),
              borderColor: "rgb(37, 171, 62)",
              fill: true,
            },
          ],
        };
        return (
          <Fragment key={i}>
            <div className="price-chart-container">
              <div className="price">
                <h3 className="title">{stock.symbol}</h3>
                <ul>
                  <span className="price left">
                    <li>Current price: {stock.c}</li>
                    <li>{stock.d}</li>
                  </span>
                  <span className="price-right">
                    <li>Close price: {stock.pc}</li>
                    <li>{(stock.dp * 10).toFixed(2)}%</li>
                  </span>
                </ul>
              </div>
              <div className="line-chart">
                <Line
                  data={monthlyPriceData}
                  options={{
                    scales: {
                      x: {
                        ticks: {
                          display: false,
                        },
                      },
                    },
                    elements: {
                      point: {
                        radius: 0,
                      },
                    },
                  }}
                  className="myChart"
                />
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

export default StockList;
