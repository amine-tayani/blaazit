import React from 'react'
import { SearchOutlined } from '@ant-design/icons';

const Search = () => {
  return (

    <div class="overflow-hidden flex">
      <input type="text" class="transition duration-200 ease-in-out bg-gray-800 text-gray-900 rounded-r-none appearance-none w-96 px-4 py-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="search for community or post" />
      <button class="bg-gray-700 flex items-center justify-center py-2 px-4 border-gray-500 focus:outline-none ">
        <SearchOutlined style={{ color: 'white' }} />
      </button>
    </div >
  )
}

export default Search
