import React, { Fragment, useRef, useState, useEffect } from "react";
import "./StockList.styles.scss";
/* eslint-disable */
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import stockData from "../../../stockData";
import { useAuth } from "../../../contexts/AuthContext";
import useUserProfile from "../../../userProfile";

function StockList({ stocks, monthlyPrices }) {
  const auth = useAuth();
  return (
    <div className="StockList">
      {stocks.map((stock, i) => {
        return StockListItem(stock, i, auth, monthlyPrices);
      })}
    </div>
  );
}

export default StockList;

//----------------------------->

function StockListItem(stock, i, auth, monthlyPrices) {
  const quantityRef = useRef();
  const { updateUserProfile, getUserProfile } = useUserProfile();
  const [totalFunds, setTotalFunds] = useState(0);

  useEffect(() => {
    getUserProfile().then(profile => {
      setTotalFunds(parseFloat(profile.funds));
    }).catch(error => {
      console.error(error);
    })
  }, []);

  if (!monthlyPrices[i]) {
    return null;
  }

  const updateFunds = async (funds) => {
    await updateUserProfile({
      funds: parseFloat(funds),
    });
    setTotalFunds(funds);
  };

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

  const buyStock = async (e, stock, uid, quantity) => {
    e.preventDefault();
    if (!stock) {
      console.error("Stock Unavailable");
      return;
    }
    if (totalFunds < stock.c * quantity) {
      alert("Insufficient Funds.");
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
      updateFunds(totalFunds - (stock.c * quantity));
      alert(`you have purchased stock from ${stock.symbol}...`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Fragment key={i}>
      <div className="price-chart-container">
        <div className="price-list">
          <div className="price-detail">
            <div className="title-img"></div>
            <ul>
              <li>
                <img src={stock.img} alt="company-icon" />
              </li>
              <li>
                <h3 className="title">{stock.symbol}</h3>
              </li>
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
            <div className="quantity-btn flex justify-left items-space-evenly gap-3">
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
              plugins: {
                legend: {
                  labels: {
                    color: "white",
                    boxWidth: 0,
                  },
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
