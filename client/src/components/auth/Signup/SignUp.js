import { useContext } from "react"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import { validation } from "./validation"
import { userContext } from "../../../context/authContext"
import Cookies from "universal-cookie"
import axios from "axios"
import Navbar from "../../Navbar"
import Alert from "../../shared/Alert"

const SignUp = () => {
  const cookies = new Cookies()
  const { state, dispatch } = useContext(userContext)
  const { register, handleSubmit, errors, getValues } = useForm()
  const router = useHistory()

  const createAccount = async () => {
    const { email, password, username } = getValues(["email", "password", "username"])
    try {
      const newUser = { email, password, username }
      dispatch({ type: "CHANGE_LOADING", loading: true })
      await axios.post("/api/users/register", newUser)
      const loginResponse = await axios.post("/api/users/login", {
        email,
        password,
      })
      dispatch({
        type: "CREATE_ACCOUNT",
        token: loginResponse.data.token,
        user: loginResponse.data.user,
      })
      dispatch({ type: "CHANGE_LOADING", loading: false })
      cookies.set("auth-token", loginResponse.data.token, {
        sameSite: "strict",
        path: "/",
        expires: new Date(new Date().getTime() + 1000 * 1000),
      })
      router.push("/")
    } catch (err) {
      if (err.response.data.error) {
        dispatch({ type: "CHANGE_LOADING", loading: false })
        dispatch({ type: "ERROR_CREATE_ACCOUNT", error: err.response.data.msg })
      } else {
        dispatch({ type: "ERROR_CREATE_ACCOUNT", error: "" })
      }
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
          {state.userError && <Alert message={state.userError} />}

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
            <p className="text-xs block sm:inline text-red-600 mt-3 font-bold">
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
            <label className="block uppercase tracking-wide text-gray-700 text-sm font-black ">
              Password
            </label>
            <input
              className="appearance-none w-full mb-3 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
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
          <div className="font-medium text-sm flex justify-center items-center my-8 space-x-1">
            <p className="text-gray-600 text-center text-sm font-bold">Do you have an account?</p>
            <a href="/login" className="text-blue-500 text-sm font-bold hover:text-blue-700">
              Login
            </a>
          </div>
        </form>
      </div>
    </>
  )
}

export default SignUp
