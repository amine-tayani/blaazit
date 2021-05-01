import { AiOutlineSearch } from "react-icons/ai"

const Search = () => {
  return (
    <div className="overflow-hidden flex">
      <input
        type="text"
        className="transition duration-200 ease-in-out bg-gray-800 text-gray-900 rounded-r-none appearance-none lg:w-96 px-4 py-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        placeholder="search for communities or posts"
      />
      <button className="flex items-center justify-center bg-gray-800 py-2 px-4 border-gray-500 focus:outline-none hover:bg-gray-700 rounded-r-lg transition ease-in-out duration-200">
        <AiOutlineSearch size="20" color="#fff" />
      </button>
    </div>
  )
}

export default Search
