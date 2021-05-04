import { useState, useContext } from "react"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import axios from "axios"
import userContext from "../../../context/authContext"
import { validation } from "./validation"
import Navbar from "../../Navbar"

const SignUp = () => {
  const { setUserData } = useContext(userContext)
  const [authError, setauthError] = useState("")
  const { register, handleSubmit, errors, getValues } = useForm({
    mode: "onChange",
  })
  const history = useHistory()

  const createAccount = async () => {
    const { email, password, username } = getValues(["email", "password", "username"])
    try {
      const newUser = { email, password, username }
      await axios.post("http://localhost:5000/api/users/register", newUser)
      const loginResponse = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      })
      setUserData({
        token: loginResponse.data.token,
        user: loginResponse.data.user,
      })
      localStorage.setItem("auth-token", loginResponse.data.token)
      history.push("/")
    } catch (err) {
      err.response.data.msg && setauthError(err.response.data.msg)
    }
  }

  return (
    <>
      <Navbar />
      <div className="flex h-full my-32 ">
        <form onSubmit={handleSubmit(createAccount)} className=" w-full max-w-xs m-auto font-sans">
          <div className="flex justify-center mb-6">
            <h1 className="text-4xl">SIGN UP </h1>
          </div>
          {authError && (
            <div
              class="flex justify-centerfont-bold w-full px-6 py-3 rounded font-bold text-white bg-red-600"
              role="alert"
            >
              {authError}
            </div>
          )}
          <div className="my-4">
            <label className="block uppercase tracking-wide text-gray-700 text-sm font-black mb-2">
              Username
            </label>
            <input
              className="appearance-none w-full p-2 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="sami.outlandish"
              name="username"
              ref={register(validation.username)}
            />
            <p className=" text-xs block sm:inline text-red-600 mt-3 font-bold">
              {errors.username && errors.username.message}
            </p>
          </div>
          <div className="my-4">
            <label className="block uppercase tracking-wide text-gray-700 text-sm font-black mb-2">
              Email
            </label>
            <input
              className="appearance-none w-full mb-3 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="sami.outlandish@gmail.com"
              name="email"
              ref={register(validation.email)}
            />
            <p className="text-xs block sm:inline text-red-600 mt-3 font-bold">
              {errors.email && errors.email.message}
            </p>
          </div>
          <div className="my-4">
            <label className="block uppercase tracking-wide text-gray-700 text-sm font-black mb-2">
              Password
            </label>
            <input
              className="appearance-none w-full mb-3 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="password"
              placeholder="******************"
              name="password"
              ref={register(validation.password)}
            />
            <p className="text-xs block sm:inline text-red-600 font-bold mt-3">
              {errors.password && errors.password.message}
            </p>
          </div>
          <button className="bg-blue-700 w-full text-white font-black text-base py-2 px-4 rounded ">
            Sign Up
          </button>
          <div className="font-medium text-sm flex justify-between p-2 items-center my-4">
            <p className="text-gray-600 p-2 text-center text-sm font-bold">
              Do you have an account?
            </p>
            <a
              href="/login"
              className=" bg-green-400 hover:bg-green-700 w-1/3 text-white font-black text-base py-2 px-4 rounded focus:outline-none"
            >
              Login
            </a>
          </div>
        </form>
      </div>
    </>
  )
}

export default SignUp
