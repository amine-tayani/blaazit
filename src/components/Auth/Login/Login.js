import { useState, useContext } from "react"
import axios from "axios"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import UserContext from "../../../context/authContext"
import { validation } from "./validation"
import Navbar from "../../Navbar"
const Login = () => {
  const [authError, setauthError] = useState("")
  const { setUserData } = useContext(UserContext)
  const { register, handleSubmit, errors, getValues } = useForm()
  const history = useHistory()

  const handleLogin = async () => {
    const { email, password } = getValues(["email", "password"])
    try {
      const loginUser = { email, password }
      const loginResponse = await axios.post("http://localhost:5000/api/users/login", loginUser)
      console.log(loginResponse)
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
        <form onSubmit={handleSubmit(handleLogin)} className=" w-full max-w-xs m-auto font-sans">
          <div className="flex justify-center">
            <h1 className="text-4xl">LOG IN </h1>
          </div>
          {authError && (
            <>
              <div class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div class="flex items-center justify-center w-12 bg-red-500">
                  <svg
                    class="w-6 h-6 text-white fill-current"
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                  </svg>
                </div>

                <div class="px-4 py-2 -mx-3">
                  <div class="mx-3">
                    <span class="font-semibold text-red-500 dark:text-red-400">Error</span>
                    <p class="text-sm text-gray-600 dark:text-gray-200">{authError}</p>
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="my-4">
            <label className="block uppercase tracking-wide text-gray-700 text-sm font-black mb-2">
              Email
            </label>
            <input
              className="appearance-none w-full mb-3 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="email"
              type="text"
              placeholder="sami.outlandish@gmail.com"
              ref={register(validation.email)}
            />
            <p className="text-xs  block sm:inline text-red-500 mt-3 font-bold">
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
              name="password"
              placeholder="******************"
              ref={register(validation.password)}
            />
            <p className="text-xs  block sm:inline text-red-500 mt-3 font-bold">
              {errors.password && errors.password.message}
            </p>
          </div>
          <button className="bg-green-400 hover:bg-green-700 w-full text-white font-black text-base py-2 px-4 rounded focus:outline-none">
            Sign In
          </button>
          <div class="flex justify-center p-4">
            <a href="#!" class=" text-gray-600 p-1 text-center text-sm font-medium">
              Forgot your password ?
            </a>
          </div>
          <div className="font-medium text-sm flex justify-between p-2 items-center">
            <p className="text-gray-600 p-2 text-center text-sm font-bold">
              Don't have an account?
            </p>
            <a
              href="/signup"
              className=" bg-indigo-700 hover:bg-indigo-900 w-1/3 text-white font-black text-base py-2 px-4 rounded focus:outline-none"
            >
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
