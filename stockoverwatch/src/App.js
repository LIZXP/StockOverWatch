/* eslint-disable */
import { useState, useEffect, useInsertionEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [stocks, setStocks] = useState([]);
  const userCollectionRef = collection(db, "users");

  const baseUrl = "https://finnhub.io/api/v1/quote";
  const token = "cdmjq6aad3ibvooj3ue0cdmjq6aad3ibvooj3ueg";
  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await getDocs(userCollectionRef);
        setUsers(
          data.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
        console.log(users);
      } catch (err) {
        console.log(err);
      }
    };

    getUser();
  }, []);
  const getStocksData = (stock) => {
    return axios
      .get(`${baseUrl}?symbol=${stock}&token=${token}`)
      .catch((err) => {
        console.error("FinnError", error.message);
      });
  };
  const stocksArr = [];
  useEffect(() => {
    getStocksData("META")
      .then((res) => {
        setStocks([{ ...res.data, symbol: "META" }]);
        console.log(stocks);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <div className="App">
        {users.map((user) => {
          return (
            <div key={user.id}>
              <h1>Name: {user.name}</h1>
              <h1>Phone: {user.phone}</h1>
            </div>
          );
        })}
      </div>
      <div className="Stocks">
        {stocks.map((stock) => {
          return (
            <div key={stock.symbol}>
              <h1>price: {stock.c}</h1>
              <h1>high: {stock.o}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
