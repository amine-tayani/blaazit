import React from 'react'
import Sidebar from "./Sidebar";
import Header from './Header'
import Post from './post/Post'

const Home = () => {

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="grid grid-rows-3 grid-flow-col gap-14 flex-1 overflow-y-auto">
        <div className="col-start-1">
          <Sidebar />
        </div>
        <div className="col-start-2 font-sans mt-8">
          <Post />
        </div>
        <div className="row-start-1 row-end-3 ">

        </div>
      </div >
    </div >
  )
}

export default Home

