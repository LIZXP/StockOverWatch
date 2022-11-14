/* eslint-disable */
import { useState, useEffect, Fragment } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { stocksPriceDataFinn } from "./helper/helperFunctions.js";
import Navbar from "./components/navbar/Navbar";
import Stockcards from "./components/stockcards/Stockcards";
import Body from "./components/bodycontent/Body";

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
    <div className="stocks-container">
      <div className="App">
        <Stockcards stocks={stocks} />
        <Navbar />
        <Body />
      </div>
    </div>
  );
}

export default App;
