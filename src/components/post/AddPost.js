import { IoImagesOutline } from "react-icons/io5"

const AddPost = () => {
  return (
    <div class="flex flex-col flex-grow bg-gray-50 mt-32 mr-10 ml-16 rounded-lg">
      <div class=" px-8 py-2 border-b border-gray-300">
        <p class="font-bold text-sm text-gray-800 mb-2 mt-2 ">Post Something</p>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center space-x-1">
          <div className="flex justify-center w-10 h-10 ml-10 my-4 rounded-full text-gray-200">
            <a href className="self-center ">
              <img className="rounded-full" src="https://i.pravatar.cc/40" alt="" />
            </a>
          </div>
          <div class="relative ">
            <input
              type="text"
              name="message"
              placeholder="What's on your mind?"
              className="w-full px-4 py-2 mr-4 text-base text-gray-700 font-medium border-transparent bg-transparent rounded-lg focus:outline-none"
            />
          </div>
        </div>
        <div className="flex items-center mr-8">
          <IoImagesOutline size="30" color="gray" />
        </div>
      </div>
    </div>
  )
}

export default AddPost
