import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import { authContext } from "../../context/authContext"
import { validation } from "./validation"
import Navbar from "../Navbar"
import google from "../../assets/svg/google-icon.svg"

const Login = () => {
  const { login } = useContext(authContext)
  const [authError, setauthError] = useState("")
  const { register, handleSubmit, errors, getValues } = useForm()
  const history = useHistory()

  const handleLogin = async () => {
    const { email, password } = getValues(["email", "password"])

    await login(email, password)
      .then((res) => {
        console.log(res)
        history.push("/")
      })
      .catch((err) => {
        if (err.code === "auth/user-not-found") {
          setauthError("This user does not exist.Try again")
        } else {
          setauthError("That password was incorrect.")
        }
      })
  }

  return (
    <>
      <Navbar />
      <div className="flex h-full my-12 ">
        <form onSubmit={handleSubmit(handleLogin)} className=" w-full max-w-xs m-auto font-sans">
          <div className="flex justify-center">
            <h1 className="text-4xl">LOG IN </h1>
          </div>
          {authError && (
            <div
              class="flex justify-centerfont-bold w-full px-6 py-3 rounded font-bold text-white bg-red-600 mb-3 mt-3"
              role="alert"
            >
              {authError}
            </div>
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
            <p className="text-xs block sm:inline text-red-700 mt-3 font-bold">
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
            <p className="text-xs block sm:inline text-red-700 mt-3 font-bold">
              {errors.password && errors.password.message}
            </p>
          </div>
          <button className="bg-green-400 hover:bg-green-700 w-full text-white font-black text-base py-2 px-4 rounded focus:outline-none">
            Sign In
          </button>
          <p className="mx-32 my-4 text-gray-400 text-xs font-bold">OR LOG IN </p>
          <button className="bg-white text-gray-800 shadow-md focus:outline-none py-2 px-4 w-full inline-flex items-center">
            <img src={google} className="h-4 w-4" alt="" />
            <span className="ml-10 font-black text-base ">Login with google account</span>
          </button>
        </form>
      </div>
    </>
  )
}

export default Login
