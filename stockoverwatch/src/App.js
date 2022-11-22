import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup.js/SignUp";
import Login from "./components/login/Login";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import UpdateProfile from "./account/UpdateProfile";
import Main from "./components/home/Home";
import StockList from "./components/buyerNest/StockList";
import Sidebar from "./components/buyerNest/sidebar/Sidebar";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/buyernest" element={<Sidebar />}>
            <Route index element={<StockList />} />
            <Route path="1" element={<h2>hello world</h2>} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
