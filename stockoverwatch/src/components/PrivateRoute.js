import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"


export default function PrivateRoute({ component: Component, ...props}) {
  const { currentUser } = useAuth()
  return currentUser ? props.children : < Navigate to="/login" />
}
