import React from "react"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext"
import { Routes, Route, } from "react-router-dom"
import Signup from "./components/SignUp"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import ForgotPassword from "./components/ForgotPassword"
import UpdateProfile from "./components/UpdateProfile"
import PrivateRoute from "./components/PrivateRoute"
import Main from "./components/home/Home"


function App() {
  return (
    <Container>
      <div>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Main/>}/> 
              <Route path="/update-profile" element={<PrivateRoute><UpdateProfile/></PrivateRoute>}/> 
              <Route path="/signup" element={<Signup/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/forgot-password" element={<ForgotPassword/>} />
            </Routes>
          </AuthProvider>
      </div>
    </Container>
  )
}

export default App