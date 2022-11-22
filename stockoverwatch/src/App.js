import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/SignUp";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import PrivateRoute from "./components/PrivateRoute";
import Main from "./components/home/Home";
import StockList from "./components/buyerNest/StockList";
import Sidebar from "./components/buyerNest/sidebar/Sidebar";
import Learn from "./components/learn/Learn";

function App() {
  return (
    <Container>
      <div>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Main />} />
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
              <Route index element={<StockList />} />
              <Route path="1" element={<h2>hello world</h2>} />
            </Route>
            <Route path="/learn" element={<Learn />} />
          </Routes>
        </AuthProvider>
      </div>
    </Container>
  );
}

export default App;
