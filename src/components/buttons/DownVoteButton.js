import React from 'react'

const DownVoteButton = ({ votes }) => {


  return (
    <button className="bg-red-400 font-bold py-2 px-4 rounded inline-flex items-center focus:outline-none hover:bg-red-600 transition ease-in-out" >
      <svg className="fill-current text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -8 24 24" preserveAspectRatio="xMinYMin" ><path d="M7.071 5.314l4.95-4.95a1 1 0 1 1 1.414 1.414L7.778 7.435a1 1 0 0 1-1.414 0L.707 1.778A1 1 0 1 1 2.121.364l4.95 4.95z"></path></svg>
      <span className="font-bold text-white ">{votes ? votes : 0}</span>
    </button >
  )
}

export default DownVoteButton
