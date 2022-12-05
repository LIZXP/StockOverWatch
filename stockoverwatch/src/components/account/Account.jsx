import React, { useEffect, useState } from "react";
import useUserProfile from "../../userProfile";
import stockData from "../../stockData";
import "./account.styles.scss";
import "../../helper/helperFunctions";
import { stocksPriceDataFinn } from "../../helper/helperFunctions";

export default function Account() {
  const { updateUserProfile, getUserProfile } = useUserProfile();
  const [totalFunds, setTotalFunds] = useState(0);
  const [requestedFunds, setRequestedFunds] = useState(0);
  const [stocks, setStocks] = useState([]);
  const [prices, setPrices] = useState([]);
  const [showFunds, setShowFunds] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    getUserProfile()
      .then((profile) => {
        setTotalFunds(parseFloat(profile.funds));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    stockData
      .getAllStocks()
      .then((query) => {
        setStocks(
          query.docs.map((x) => {
            return {
              id: x.id,
              ...x.data(),
            };
          })
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    (async () => {
      const promises = stocksPriceDataFinn();
      const temp = [];
      for (const p of promises) {
        temp.push(p);
      }
      setPrices(temp);
    })();
  }, []);
  const onChangedRequestFunds = (event) => {
    setRequestedFunds(parseFloat(event.target.value));
  };

  const updateFunds = async (funds) => {
    await updateUserProfile({
      funds: parseFloat(funds),
    });
    setTotalFunds(funds);
    setRequestedFunds(0);
  };

  const resetFunds = () => {
    updateFunds(0);
  };

  const addFunds = (funds) => {
    updateFunds(parseFloat(totalFunds) + parseFloat(funds));
  };

  const toggleShowFunds = () => {
    setShowFunds(!showFunds);
  };

  const toggleShowPortfolio = () => {
    setShowPortfolio(!showPortfolio);
  };

  return (
    <div className="account-page">
      <div className="account-header">
        <div className="header-cell">
          <h1> &gt; Account Terminal...</h1>
        </div>
      </div>
      <div className="account-body">
        <div className="account-cell">
          <a href="/">
            <button className="btn">Home</button>
          </a>
        </div>
        <div className="account-cell">
          <a href="/buyernest/stocks">
            <button className="btn">Buyer Nest</button>
          </a>
        </div>
        <div className="account-cell">
          <button className="btn" onClick={toggleShowFunds}>
            Manage Funds:{" "}
          </button>
          {showFunds && (
            <>
              <p className="available-funds">
                {" "}
                Total Funds: {totalFunds.toFixed(2)}{" "}
              </p>
              <input
                type="number"
                placeholder={"Request funds..."}
                className="user-input"
                name="balance"
                value={requestedFunds}
                onChange={onChangedRequestFunds}
              />
              <button className="btn-2" onClick={resetFunds}>
                Reset Funds
              </button>
              <button
                className="btn-2"
                onClick={() => {
                  addFunds(requestedFunds);
                }}
              >
                Add Funds
              </button>
            </>
          )}
        </div>
        <div className="account-cell">
          <button className="btn" onClick={toggleShowPortfolio}>
            Portfolio:
          </button>
          {showPortfolio &&
            stocks.map((stock, i) => {
              const matchingPrices = prices.filter(
                (p) => p.symbol === stock.stock
              );
              let currentValue = 0;
              if (matchingPrices.length !== 0) {
                currentValue = matchingPrices[0].c;
              }
              const prevValue = stock.price;
              return (
                <div key={i}>
                  <div>
                    <p>
                      Stock:{stock.stock} Quantity:{stock.quantity} Total Value:
                      {(currentValue * stock.quantity).toFixed(2)} Prev Value:
                      {prevValue} Current Value:{currentValue} Difference:
                      {(currentValue - prevValue).toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <button
                      className="btn-2"
                      onClick={() => {
                        addFunds(currentValue * stock.quantity);
                        stockData.deleteStock(stock.id);
                        const newStocks = stocks.filter((x) => x !== stock);
                        setStocks(newStocks);
                      }}
                    >
                      SELL
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
