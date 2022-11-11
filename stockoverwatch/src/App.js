/* eslint-disable */
import { useState, useEffect, Fragment } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { stocksPriceDataFinn } from "./helper/helperFunctions.js";

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
      } catch (err) {
        console.log(err);
      }
    };

    getUser();
  }, []);

  useEffect(() => {
    Promise.all(stocksPriceDataFinn()).then((res) => {
      setStocks(res);
    });
  }, []);
  return (
    <Fragment>
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
      <div className="stocks">
        {stocks.map((stock) => {
          return (
            <div key={stock.symbol}>
              <h1>{stock.symbol}</h1>
              <h1>price: {stock.c}</h1>
              <h1>high: {stock.o}</h1>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

export default App;
