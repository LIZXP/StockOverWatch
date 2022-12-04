import React, { Fragment, useRef, useState } from "react";
import "./StockList.styles.scss";
/* eslint-disable */
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import stockData from "../../../stockData";
import { useAuth } from "../../../contexts/AuthContext";

function StockList({ stocks, monthlyPrices }) {
  const auth = useAuth();

  if (stocks.length === 0 || monthlyPrices.length === 0) {
    return null;
  }

  return (
    <div className="StockList">
      {stocks.map((stock, i) => {
        return StockListItem(stock, i, auth, monthlyPrices);
      })}
    </div>
  );
}

export default StockList;

const buyStock = async (e, stock, uid, quantity) => {
  console.log("buy stock excuted", stock);
  e.preventDefault();
  if (!stock) {
    console.error();
    return;
  }

  const purchasedStock = {
    user: uid,
    stock: stock.symbol,
    price: stock.c,
    quantity: quantity,
    dop: new Date(),
  };

  try {
    await stockData.addStock(purchasedStock);
    console.log(`you have purchased stock from ${stock.symbol}...`);
  } catch (err) {
    console.error(err);
  }
};

function StockListItem(stock, i, auth, monthlyPrices) {
  const quantityRef = useRef();

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
        <div className="price-list">
          <div className="price-detail">
            <img src={stock.img} alt="company-icon" />
            <h3 className="title">{stock.symbol}</h3>
            <ul>
              <li>Current price: {stock.c.toFixed(2)}</li>
              {stock.d > 0 ? (
                <li className="green-num">
                  Change: {stock.d.toFixed(2)} &uarr;
                </li>
              ) : (
                <li className="red-num">Change: {stock.d.toFixed(2)} &darr;</li>
              )}
              <li>Close price: {stock.pc.toFixed(2)}</li>
              {(stock.dp * 10).toFixed(2) > 0 ? (
                <li className="green-num">
                  Percent Change: {(stock.dp * 10).toFixed(2)}% &uarr;
                </li>
              ) : (
                <li className="red-num">
                  Percent Change: {(stock.dp * 10).toFixed(2)}% &darr;
                </li>
              )}
            </ul>
            <div className="quantity-btn flex justify-center items-space-evenly gap-3">
              <input
                type="number"
                className="text-black-500"
                min={0}
                ref={quantityRef}
              />
              <button
                className="buy-btn"
                type="button"
                onClick={(e) => {
                  buyStock(
                    e,
                    stock,
                    auth.currentUser.uid,
                    quantityRef.current.value
                  );
                  quantityRef.current.value = 0;
                }}
              >
                {" "}
                BUY{" "}
              </button>
            </div>
          </div>
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
}
