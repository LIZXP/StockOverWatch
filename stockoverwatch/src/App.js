import React, { useEffect, useState } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import {
  stocksPriceDataFinn,
  monthStockPriceFinn,
} from "./helper/helperFunctions.js";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import PrivateRoute from "./components/PrivateRoute";
import Main from "./components/home/Home";
import StockList from "./components/buyerNest/stockList/StockList";
import Sidebar from "./components/buyerNest/sidebar/Sidebar";
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
    <Container>
      <div>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Main stocks={stocks} />} />
            <Route
              path="/update-profile"
              element={
                <PrivateRoute>
                  <UpdateProfile />
                </PrivateRoute>
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/buyernest" element={<Sidebar />}>
              <Route
                index
                element={
                  <StockList stocks={stocks} monthlyPrices={monthlyPrice} />
                }
              />
              <Route path="1" element={<h2>hello world</h2>} />
            </Route>
          </Routes>
        </AuthProvider>
      </div>
    </Container>
  );
}

export default App;
