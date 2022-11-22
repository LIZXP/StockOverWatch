import React, { useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import "./forgotpassword.styles.scss"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
      <div className="forgot-pwd-container flex justify-center items-center content-center h-max">
        <div className="w-1/2 mt-5  px-9 py-3 bg-white shadow-md items-center">
          {error && <p className="bg-red-200 text-red-500 py-3 text-center font-bold">{error}</p>}
          {message && <p className="bg-red-200 text-red-500 py-3 text-center font-bold">{message}</p>}
          <form className="rounded " onSubmit={handleSubmit}>
            <h2 className="login-header text-center py-6">Password Reset</h2>
            <div className="mb-4">
              <label className="block mb-2 " for="email">
                Email:
              </label>
              <input type="email" ref={emailRef}
                className="shadow appearance-none border border-black rounded w-full py-5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div>
              <button disabled={loading}
                className=" resetBtn block py-4 w-full border-black text-white bg-black rounded mb-5" type="submit">Send Reset Link</button>
            </div>
            <div className="needAct">
              Need an account? &nbsp;
              <span className="linkSpan">
                <Link to="/signup">  Sign Up</Link>
              </span>
            </div>
            <div className="loginRtn">
              <Link to="/login">Return to Login</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
