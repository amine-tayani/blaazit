import React from 'react';
import Header from '../Header';
import { GoogleOutlined } from '@ant-design/icons'
const Login = () => {
  return (
    <>
      <Header />
      <div className="flex h-full my-12 ">
        <form className=" w-full max-w-xs m-auto font-sans">
          <div className="flex justify-center">
            <h1 className="text-4xl">LOG IN </h1>
          </div>
          <div>
            <label className="block uppercase tracking-wide text-gray-700 text-sm font-black mb-2" >
              Email
              </label>
            <input className="appearance-none w-full mb-6 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="sami.outlandish@gmail.com" />
          </div>
          <div>
            <label className="block uppercase tracking-wide text-gray-700 text-sm font-black mb-2" >
              Password
              </label>
            <input className="appearance-none w-full mb-6 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" placeholder="******************" />
          </div>
          <button className="bg-green-400  w-full text-white font-black text-base py-2 px-4 rounded">
            Sign In
          </button>
          <p className="mx-32 my-4 text-gray-400 text-xs font-bold">OR LOG IN </p>
          <button className="bg-white text-gray-800  py-2 px-4 w-full inline-flex items-center border">
            <GoogleOutlined />
            <span className="ml-10 font-black text-base">Login with google account</span>
          </button>
        </form>
      </div >
    </>
  )

}

export default Login
