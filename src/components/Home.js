import React from "react"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import PostFeed from "./post/PostFeed"

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-6 grid-rows-1">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-3 bg-gray-200">
          <PostFeed />
        </div>
        <div className="col-span-2">
          <div className="bg-indigo-800 h-screen w-full"></div>
        </div>
      </div>
    </>
  )
}

export default Home
