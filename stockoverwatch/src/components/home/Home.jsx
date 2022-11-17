import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { stocksPriceDataFinn } from "../../helper/helperFunctions.js";
import Navbar from "../navbar/Navbar";
import Body from "../bodycontent/Body";
import Stockcards from "../stockcards/Stockcards";
import BodyTwo from "../bodycontent/BodyTwo";
import "./home.styles.scss";

/* eslint-disable */
function Main() {
  const [users, setUsers] = useState([]);
  const [stocks, setStocks] = useState([]);
  const userCollectionRef = collection(db, "users");

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
      <div className="Main">
        <Stockcards stocks={stocks} />
        <Navbar />
        <Body />
        <BodyTwo />
      </div>
    </div>
  );
}

export default Main;
