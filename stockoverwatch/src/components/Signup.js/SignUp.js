import React, { useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import "./signup.styles.scss"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      navigate("/login")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
      <div className="signup-container flex justify-center items-center content-center h-max">
        <div className="w-1/2 mt-5 px-6 py-5 bg-white shadow-md">
          {error && <p className="bg-red-200 text-red-500 py-3 text-center font-bold">{error}</p>}
          <form className="rounded " onSubmit={handleSubmit}>
            <h2 className="signup-header text-center py-6">Create Account: </h2>
            <div className="mb-4">
              <label className="block mb-2 " for="email">
                Email:
              </label>
              <input type="email" ref={emailRef}
                className="shadow appearance-none border border-black rounded w-full py-5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label className="block mb-2" for="password">
                Password:
              </label>
              <input type="password" ref={passwordRef} className="shadow appearance-none border border-black rounded w-full py-5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " />
            </div>
            <div className="mb-4">
              <label className="block mb-2" for="password">
                Confirm Password:
              </label>
              <input type="password" ref={passwordConfirmRef} className="shadow appearance-none border border-black rounded w-full py-5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " />
            </div>
            <div>
              <button disabled={loading}
                className=" signupBtn block py-4 w-full border-black text-white bg-black rounded mb-5" type="submit">Sign Up</button>
            </div>
            <div className="loginBtn">
              Have an account? <Link to="/login">Log In</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
