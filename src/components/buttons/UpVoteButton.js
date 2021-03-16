import React from 'react'

const UpVoteButton = ({ votes }) => {
  return (


    <button class=" bg-green-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center focus:outline-none hover:bg-green-500 transition ease-in-out">
      <svg className="fill-current text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -7.5 24 24" preserveAspectRatio="xMinYMin" ><path d="M7.071 2.828l-4.95 4.95A1 1 0 0 1 .707 6.364L6.364.707a1 1 0 0 1 1.414 0l5.657 5.657a1 1 0 0 1-1.414 1.414l-4.95-4.95z"></path></svg>
      <span className="font-bold text-white">{votes ? votes : 0}</span>
    </button>





  )
}

export default UpVoteButton
