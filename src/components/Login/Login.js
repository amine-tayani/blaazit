import { useContext } from "react"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import { authContext } from "../../context/authContext"
import Navbar from "../Navbar"
import google from "../../assets/svg/google-icon.svg"

const Login = () => {
  const { login } = useContext(authContext)
  const { register, handleSubmit, errors, getValues } = useForm()
  const history = useHistory()

  const handleLogin = async () => {
    const { email, password } = getValues(["email", "password"])
    try {
      await login(email, password)
      history.push("/")
    } catch (err) {}
  }

  const loginOptions = {
    email: { required: "* Email is required" },
    password: {
      required: "* Password is required",
      minLength: {
        value: 8,
        message: "* Password must have at least 8 characters",
      },
    },
  }
  return (
    <>
      <Navbar />
      <div className="flex h-full my-12 ">
        <form onSubmit={handleSubmit(handleLogin)} className=" w-full max-w-xs m-auto font-sans">
          <div className="flex justify-center">
            <h1 className="text-4xl">LOG IN </h1>
          </div>
          <div className="my-4">
            <label className="block uppercase tracking-wide text-gray-700 text-sm font-black mb-2">
              Email
            </label>
            <input
              className="appearance-none w-full mb-3 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="email"
              type="email"
              placeholder="sami.outlandish@gmail.com"
              ref={register(loginOptions.email)}
            />
            <p className=" block sm:inline text-red-600 mt-3 font-bold">
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
              ref={register(loginOptions.password)}
            />
            <p className=" block sm:inline text-red-600 mt-3 font-bold">
              {errors.password && errors.password.message}
            </p>
          </div>
          <button className="bg-green-400  w-full text-white font-black text-base py-2 px-4 rounded">
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
