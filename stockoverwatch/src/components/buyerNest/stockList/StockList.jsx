import React, { Fragment, useRef, useState } from "react";
import "./StockList.styles.scss";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import stockData from "../../../stockData";
import { useAuth } from "../../../contexts/AuthContext";

function StockList({ stocks, monthlyPrices }) {
  const quantityRef = useRef();
  const [err, setMsg] = useState({ error: false, msg: "" });
  const auth = useAuth();

  if (stocks.length === 0 || monthlyPrices.length === 0) {
    return null;
  }

  const BuyStock = async (e, stock) => {
    console.log("buy stock excuted", stock);
    console.log(auth);
    e.preventDefault();
    setMsg("");
    if (!stock) {
      setMsg({ error: true, msg: "Stock Unvailable" })
      return;
    }

    const purchasedStock = {
      user: auth.currentUser.uid,
      stock: stock.symbol,
      price: stock.c,
      quantity: quantityRef.current.value,
      dop: new Date()
    }

    // console.log(purchasedStock);
    // console.log(quantityRef.current.value);
    // console.log(quantityRef);

    try {
      await stockData.addStock(purchasedStock);
      setMsg({ error: false, msg: "You purchased a Stock!" });
      console.log(quantityRef);
    } catch (err) {
      console.error(err);
      setMsg({ error: true, msg: err.msg });
    }
  };

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
              <div className="price-list">
                <div className="price-detail">
                  <h3 className="title">{stock.symbol}</h3>
                  <ul>
                    <span className="price left">
                      <li>Current price: {stock.c.toFixed(2)}</li>
                    </span>
                    {stock.d > 0 ? (
                      <li className="green-num">
                        Change: {stock.d.toFixed(2)} &uarr;
                      </li>
                    ) : (
                      <li className="red-num">
                        Change: {stock.d.toFixed(2)} &darr;
                      </li>
                    )}
                    <span className="price-right">
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
                    </span>
                  </ul>
                  <div className="quantity-btn flex justify-center items-space-evenly gap-3">
                    <input type="number" className="text-black-500" min={0}  ref={quantityRef}/>
                    <button
                      className="buy-btn"
                      type="button"
                      onClick={(e) => {
                        BuyStock(e, stock);
                        quantityRef.current.value = 0;
                      }}> BUY </button>
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
})}
    </div >
  );
}

export default StockList;
