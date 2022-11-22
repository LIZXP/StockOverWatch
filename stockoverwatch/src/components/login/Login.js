import React, { useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import "./login.styles.scss"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/")
    } catch(err) {
      setError("Failed to log in")
      console.log(err);
    }

    setLoading(false)
  }

  return (
  <>
    <div className="login-container flex justify-center items-center content-center h-max">
      <div className="w-1/2 mt-5  px-9 py-3 bg-white shadow-md items-center">
      {error && <p className="bg-red-200 text-red-500 py-3 text-center font-bold">{error}</p>}
        <form className="rounded " onSubmit={handleSubmit}>
          <h2 className="login-header text-center py-6">Welcome to StockOverWatch</h2>
          <div className="mb-4">
            <label className="block mb-2 " for="email">
              Email:
            </label>
            <input type="email" ref={emailRef}
            className="shadow appearance-none border border-black rounded w-full py-5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  />
          </div>
          <div className="mb-4">
            <label className="block mb-2" for="password">
              Password:
            </label>
            <input type="password" ref={passwordRef}   className="shadow appearance-none border border-black rounded w-full py-5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " />
          </div>
          <div>
            <button disabled={loading}
            className="block py-4 w-full border-black text-white bg-black rounded mb-5" type="submit">Login </button>
          </div>
          <div className="create-forgot-links">
            <Link to="/forgot-password">Forgot Password?</Link>
            <div>
              Need an account? <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </>
  )
}
