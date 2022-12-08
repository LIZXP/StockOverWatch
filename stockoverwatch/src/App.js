import React, { useEffect, useState } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { AuthProvider } from "./contexts/AuthContext";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/signup/SignUp";
import Login from "./components/login/Login";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import Main from "./components/home/Home";
import StockList from "./components/buyerNest/stockList/StockList";
import Sidebar from "./components/buyerNest/sidebar/Sidebar";
import Learn from "./components/learn/Learn";
import NewsList from "./components/news/NewsList";
import Account from "./components/account/Account";
import Insights from "./components/buyerNest/insights/Insights";
import Support from "./components/support/Support";
import UserProfile from "./components/buyerNest/userProfile/UserProfile";

import { getPrices } from "./helper/prices";

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
    (async () => {
      const [stockPrices, monthlyPrices] = await getPrices();
      setStocks(stockPrices);
      setmonthlyPrice(monthlyPrices);
    })();

  }, []);

  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Main stocks={stocks} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/support" element={<Support />} />
          <Route path="/buyernest" element={<Sidebar />}>
            <Route path="insights" element={<Insights />} />
            <Route
              path="stocks"
              element={
                <StockList stocks={stocks} monthlyPrices={monthlyPrice} />
              }
            />
            <Route path="profile" element={<UserProfile />} />
          </Route>
          <Route path="/account" element={<Account stocks={stocks} />}></Route>
          <Route path="/learn" element={<Learn />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/supportadmin" element={<SupportAdmin />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
