import React from "react"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import Post from "./post/Post"

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="grid grid-rows-3 grid-flow-col gap-14 flex-1 overflow-y-auto">
        <div className="col-start-1">
          <Sidebar />
        </div>
        <div className="col-start-2 font-sans mt-8">
          <Post />
        </div>
        <div className="row-start-1 row-end-3 "></div>
      </div>
    </div>
  )
}

export default Home
