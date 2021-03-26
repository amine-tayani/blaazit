import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { authContext } from "../../context/authContext"
import { useHistory } from "react-router-dom"
import Navbar from "../Navbar"
import google from "../../assets/svg/google-icon.svg"

const SignUp = () => {
  const { signup } = useContext(authContext)
  const [authError, setauthError] = useState("")
  const { register, handleSubmit, errors, getValues } = useForm()
  const history = useHistory()

  const handleRegistration = async () => {
    const { email, password } = getValues(["email", "password", "username"])

    await signup(email, password)
      .then(() => {
        setauthError("")
        history.push("/")
      })
      .catch((err) => {
        setauthError(err.message)
      })
  }

  const signupOptions = {
    username: { required: "* username is required" },
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
        <form
          onSubmit={handleSubmit(handleRegistration)}
          className=" w-full max-w-xs m-auto font-sans"
        >
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
              ref={register(signupOptions.username)}
            />
            <p className=" block sm:inline text-red-600 mt-3 font-bold">
              {errors.username && errors.username.message}
            </p>
          </div>
          <div className="my-4">
            <label className="block uppercase tracking-wide text-gray-700 text-sm font-black mb-2">
              Email
            </label>
            <input
              className="appearance-none w-full mb-3 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="email"
              placeholder="sami.outlandish@gmail.com"
              name="email"
              ref={register(signupOptions.email)}
            />
            <p className="block sm:inline text-red-600 mt-3 font-bold">
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
              ref={register(signupOptions.password)}
            />
            <p className="block sm:inline text-red-600 font-bold mt-3">
              {errors.password && errors.password.message}
            </p>
          </div>
          <button className="bg-blue-700 w-full text-white font-black text-base py-2 px-4 rounded ">
            Sign Up
          </button>
          <p className="mx-28 my-4 text-gray-400 text-xs font-bold">--- OR SIGN UP</p>
          <button className="bg-white text-gray-800 mb-8 py-2 px-4 w-full inline-flex items-center shadow-md focus:outline-none">
            <img src={google} className="h-4 w-4" alt="" />
            <span className="ml-14 font-black text-base">Sign up with google </span>
          </button>
        </form>
      </div>
    </>
  )
}

export default SignUp
