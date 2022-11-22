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
      <div id="current-price">
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
              <div>
                <div>
                  <ul>
                    <li>{stock.symbol}</li>
                    <li>Current price: {stock.c}</li>
                    <li>Change: {stock.d}</li>
                    <li>Percent change: {(stock.dp * 10).toFixed(2)}%</li>
                    <li>High price: {stock.h}</li>
                    <li>Low price: {stock.l}</li>
                    <li>Open price: {stock.o}</li>
                    <li>Previous close price: {stock.pc}</li>
                  </ul>
                </div>
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
                  id="myChart"
                />
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default StockList;
