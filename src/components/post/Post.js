import { useState, useRef, useEffect } from "react"
import { Transition } from "@tailwindui/react"
import { RiUserSettingsLine } from "react-icons/ri"
import { IoLanguage } from "react-icons/io5"
import { FiSettings } from "react-icons/fi"
import { HiOutlineUsers } from "react-icons/hi"
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import { FiMessageSquare, FiBookmark } from "react-icons/fi"
import { BsHeart } from "react-icons/bs"
import { BiShareAlt } from "react-icons/bi"
import { ImAttachment } from "react-icons/im"
import { GrEmoji } from "react-icons/gr"
import { IoImagesOutline } from "react-icons/io5"

const Post = () => {
  const [show, setShow] = useState(false)
  const container = useRef()

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!container.current || !container.current.contains(event.target)) {
        if (!show) return
        setShow(false)
      }
    }

    window.addEventListener("click", handleOutsideClick)
    return () => window.removeEventListener("click", handleOutsideClick)
  }, [show, container])
  return (
    <div className="flex p-8 bg-gray-50 rounded-md mt-6 mr-10 ml-16">
      <span className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full">
        <img className="rounded-full" src="https://i.pravatar.cc/50" alt="" />
      </span>
      <div className="flex flex-col flex-grow ml-4">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="font-bold">Pan Feng Shui</span>
            <span className="font-medium text-xs tracking-wide text-gray-500">
              27 April at 9.57 PM
            </span>
          </div>
          <div ref={container} className="relative cursor-pointer">
            <button
              className="text-gray-500 focus:outline-none rounded-full p-2 hover:text-gray-100 hover:bg-gray-300 transform hover:scale-105"
              onClick={() => setShow(!show)}
            >
              <HiOutlineDotsHorizontal size="26" />
            </button>
            <Transition
              show={show}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="flex flex-col origin-top-right absolute right-0 w-48 py-2 bg-gray-50 rounded shadow-md ">
                <div className="flex items-center py-2 px-8 text-gray-500 rounded  transition ease-in-out duration-400  hover:text-blue-700">
                  <RiUserSettingsLine size="20" />
                  <a href className=" px-4 py-2 ">
                    Profile
                  </a>
                </div>
                <div className="flex items-center py-2 px-8 text-gray-500 rounded  transition ease-in-out duration-400  hover:text-blue-700">
                  <HiOutlineUsers size="20" />
                  <a href className=" px-4 py-2  ">
                    Friends
                  </a>
                </div>
                <div className="flex items-center py-2 px-8 text-gray-500 rounded  transition ease-in-out duration-400 hover:text-blue-700">
                  <FiSettings size="20" />
                  <a href className=" px-4 py-2 ">
                    Settings
                  </a>
                </div>

                <div className="flex items-center py-2 px-8 text-gray-500 rounded  transition ease-in-out duration-400 hover:text-blue-700">
                  <IoLanguage size="20" />
                  <a href className=" px-4 py-2 ">
                    Language
                  </a>
                </div>
              </div>
            </Transition>
          </div>
        </div>
        <div className="flex flex-col max-w-xl p-2 -mx-12">
          <p className="mt-4 text-sm text-gray-700 font-serif font-medium">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
          <div className="h-72 mt-4 max-w-2xl bg-gray-200">
            <img
              className="rounded-md"
              src="https://placeimg.com/560/300/nature?t=1619562270605"
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-around my-8 py-4 -mx-12  border-t border-b max-w-xl border-opacity-60">
          <div className="flex items-center space-x-2 text-gray-600 ">
            <FiMessageSquare color="#a5a5af" size="22" />
            <button className="text-sm font-semibold">25 Comments</button>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <BsHeart color="#a5a5af" size="22" />
            <button className="text-sm font-semibold">120k Likes</button>
          </div>
          <div className="flex items-center space-x-2">
            <BiShareAlt color="#a5a5af" size="22" />
            <button className="text-sm font-semibold text-gray-600">200 Share</button>
          </div>
          <div className="flex items-center space-x-2">
            <FiBookmark color="#a5a5af" size="22" />
            <button className="text-sm font-semibold text-gray-600">12 Saved</button>
          </div>
        </div>
        <div className="flex -mx-12 space-x-2 items-center">
          <span className="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full">
            <img className="rounded-full" src="https://i.pravatar.cc/40" alt="" />
          </span>
          <div className="flex bg-gray-100 w-4/5 border border-gray-200 rounded-2xl items-center">
            <input
              className="w-full px-4 py-2 mr-4 text-base text-gray-700 font-medium border-transparent bg-transparent rounded-lg focus:outline-none"
              type="text"
              placeholder="write your comment"
            />
            <div className="flex space-x-2 p-4">
              <ImAttachment color="#a5a5af" size="22" />
              <GrEmoji color="#a5a5af" size="22" />
              <IoImagesOutline color="#a5a5af" size="22" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
