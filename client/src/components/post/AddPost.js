import { FcAddImage } from "react-icons/fc"
import { useRef, useState } from "react"
import axios from "axios"
import Cookies from "universal-cookie"

const AddPost = () => {
  const cookies = new Cookies()
  const inputFile = useRef()
  const [file, setFile] = useState(null)
  const [description, setDescription] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("description", description)

      await axios.post("/api/posts/", formData, {
        headers: {
          "content-type": "multipart/form-data",
          "x-auth-token": cookies.get("auth-token"),
        },
      })
    } catch (err) {
      console.log(err.response.data.message)
    }
  }

  return (
    <div className="flex flex-col flex-grow bg-gray-50 mt-32 mr-10 ml-16 rounded-lg">
      <div className=" px-8 py-2 border-b border-gray-300">
        <p className="font-bold text-sm text-gray-800 mb-2 mt-2 ">Post Something</p>
      </div>
      <form onSubmit={handleOnSubmit}>
        <div>
          <div className="flex justify-between">
            <div className="flex items-center space-x-1">
              <div className="flex justify-center w-10 h-10 ml-10 my-4 rounded-full text-gray-200">
                <a href="#profile" className="self-center ">
                  <img className="rounded-full" src="https://i.pravatar.cc/40" alt="" />
                </a>
              </div>
              <div className="relative">
                <input
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  name="description"
                  style={{ width: "500px" }}
                  placeholder="What's happening?"
                  className="px-4 py-2 mr-4 text-base text-gray-700 font-medium border-transparent bg-transparent rounded-lg focus:outline-none"
                />
              </div>
            </div>
            <div className="flex items-center mr-8 cursor-pointer">
              <input type="file" name="file" onChange={(e) => setFile(e.target.files[0])} />
            </div>
          </div>
          <input
            className=" text-white bg-indigo-500 border-0 py-2 w-full focus:outline-none rounded-b-lg font-semibold transition duration-200 ease-in-out text-center cursor-pointer"
            type="submit"
            value=" Publish the post"
          />
        </div>
      </form>
    </div>
  )
}

export default AddPost
