// import React, { useRef, useState } from "react"
// import { useAuth } from "../contexts/AuthContext"
// import { useNavigate } from "react-router-dom"

// export default function UpdateProfile() {
//   const emailRef = useRef()
//   const passwordRef = useRef()
//   const passwordConfirmRef = useRef()
//   const { currentUser, updatePassword, updateEmail } = useAuth()
//   const [error, setError] = useState("")
//   const [loading, setLoading] = useState(false)
//   const navigate = useNavigate()

//   function handleSubmit(e) {
//     e.preventDefault()
//     if (passwordRef.current.value !== passwordConfirmRef.current.value) {
//       return setError("Passwords do not match")
//     }

//     const promises = []
//     setLoading(true)
//     setError("")

//     if (emailRef.current.value !== currentUser.email) {
//       promises.push(updateEmail(emailRef.current.value))
//     }
//     if (passwordRef.current.value) {
//       promises.push(updatePassword(passwordRef.current.value))
//     }

//     Promise.all(promises)
//       .then(() => {
//         navigate("/")
//       })
//       .catch(() => {
//         setError("Failed to update account")
//       })
//       .finally(() => {
//         setLoading(false)
//       })
//   }

// //   return (
// //     <>
// //       <Card>
// //         <Card.Body>
// //           <h2>Update Profile</h2>
// //           {error && <Alert variant="danger">{error}</Alert>}
// //           <Form onSubmit={handleSubmit}>
// //             <Form.Group id="email">
// //               <Form.Label>Email</Form.Label>
// //               <Form.Control
// //                 type="email"
// //                 ref={emailRef}
// //                 required
// //                 defaultValue={currentUser.email}
// //               />
// //             </Form.Group>
// //             <Form.Group id="password">
// //               <Form.Label>Password</Form.Label>
// //               <Form.Control
// //                 type="password"
// //                 ref={passwordRef}
// //                 placeholder="Leave blank to keep the same"
// //               />
// //             </Form.Group>
// //             <Form.Group id="password-confirm">
// //               <Form.Label>Password Confirmation</Form.Label>
// //               <Form.Control
// //                 type="password"
// //                 ref={passwordConfirmRef}
// //                 placeholder="Leave blank to keep the same"
// //               />
// //             </Form.Group>
// //             <Button disabled={loading} type="submit">
// //               Update
// //             </Button>
// //           </Form>
// //         </Card.Body>
// //       </Card>
// //       <div>
// //         <Link to="/">Cancel</Link>
// //       </div>
// //     </>
// //   )
// // }

// return (
//   <>
//     <div className="signup-container flex justify-center items-center content-center h-max">
//       <div className="w-1/2 mt-5 px-6 py-5 bg-white shadow-md">
//       {error && <p className="bg-red-200 text-red-500 py-3 text-center font-bold">{error}</p>}
//         <form className="rounded " onSubmit={handleSubmit}>
//           <h2 className="signup-header text-center py-6">Create Account:</h2>
//           <div className="mb-4">
//             <label className="block mb-2 " for="email">
//               Email
//             </label>
//             <input type="email" ref={emailRef}
//             className="shadow appearance-none border border-black rounded w-full py-5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2" for="password">
//               Password:
//             </label>
//             <input type="password" ref={passwordRef}   className="shadow appearance-none border border-black rounded w-full py-5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2" for="confirm-password">
//                Confirm Password:
//             </label>
//             <input type="password" ref={passwordRef}   className="shadow appearance-none border border-black rounded w-full py-5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " />
//           </div>
//           <div>
//             <button disabled={loading}
//             className="block py-4 w-full border-black text-white bg-black rounded mb-5" type="submit">Sign Up</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   </>
//   )
// }
