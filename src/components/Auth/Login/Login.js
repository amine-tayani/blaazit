import { useContext } from "react"
import axios from "axios"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import { userContext } from "../../../context/authContext"
import { validation } from "./validation"
import Navbar from "../../Navbar"
import Alert from "../../shared/Alert"
const Login = () => {
  const { state, dispatch } = useContext(userContext)
  const { register, handleSubmit, errors, getValues } = useForm()
  const router = useHistory()

  const handleLogin = async () => {
    const { email, password } = getValues(["email", "password"])
    try {
      const userInfos = { email, password }
      dispatch({ type: "CHANGE_LOADING", loading: true })
      const loginResponse = await axios.post(
        `${process.env.REACT_APP_API_SERVER}/users/login`,
        userInfos
      )
      dispatch({
        type: "LOGIN_TO_ACCOUNT",
        user: loginResponse.data.user,
        token: loginResponse.data.token,
      })
      dispatch({ type: "CHANGE_LOADING", loading: false })
      localStorage.setItem("auth-token", loginResponse.data.token)
      router.push("/")
    } catch (err) {
      console.log(err.response)
      if (err.response.data.msg) {
        dispatch({ type: "CHANGE_LOADING", loading: false })
        dispatch({ type: "ERROR_LOGIN_TO_ACCOUNT", error: err.response.data.msg })
      }
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
          {state.userError && <Alert message={state.userError} />}

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
            <div className="flex items-center justify-between">
              <label className="block uppercase tracking-wide text-gray-700 text-sm font-black ">
                Password
              </label>
              <a className="text-blue-500 text-sm font-bold hover:text-blue-700 " href="#forgot">
                Forgot password?
              </a>
            </div>
            <input
              className="appearance-none w-full mb-3 mt-2 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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

          <div className="font-medium text-sm flex justify-center items-center my-4 space-x-1">
            <p className="text-gray-600 text-center text-sm font-bold">Don't have an account?</p>
            <a href="/signup" className=" text-blue-500 text-sm font-bold hover:text-blue-700">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
