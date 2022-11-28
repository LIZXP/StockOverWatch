import React, { useEffect, useState } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import {
  stocksPriceDataFinn,
  monthStockPriceFinn,
} from "./helper/helperFunctions.js";

import { AuthProvider } from "./contexts/AuthContext";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/signup/SignUp";
import Login from "./components/login/Login";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import UpdateProfile from "./components/account/UpdateProfile";
import Main from "./components/home/Home";
import StockList from "./components/buyerNest/stockList/StockList";
import Sidebar from "./components/buyerNest/sidebar/Sidebar";
import Learn from "./components/learn/Learn";
import Account from "./components/account/Account";
/* eslint-disable */

function App() {
  const [users, setUsers] = useState([]);
  const [stocks, setStocks] = useState([]);
  const [monthlyPrice, setmonthlyPrice] = useState([]);
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

  useEffect(() => {
    Promise.all(monthStockPriceFinn()).then((res) => {
      setmonthlyPrice(res);
    });
  }, []);
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Main stocks={stocks} />} />
          {/* <Route path="/update-profile" element={<UpdateProfile />} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/buyernest" element={<Sidebar />}>
            <Route index element={<StockList stocks={stocks} monthlyPrices={monthlyPrice} />}/>
          </Route>
          <Route path="/learn" element={<Learn />} />
          <Route path="/account" element={<Account />}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
