import { useState, useRef, useEffect, useContext } from "react"
import { userContext } from "../context/authContext"
import { Transition } from "@tailwindui/react"
import {
  RiUser3Line,
  RiUserSettingsLine,
  RiMoonLine,
  RiLogoutBoxLine,
  RiLoginBoxLine,
} from "react-icons/ri"
import { GoPrimitiveDot } from "react-icons/go"
import { IoLanguage } from "react-icons/io5"
import { FiSettings } from "react-icons/fi"
import { HiOutlineUsers } from "react-icons/hi"
const Menu = () => {
  const { state, logout } = useContext(userContext)
  const [show, setShow] = useState(false)
  const [online, setOnline] = useState(false)
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
    <div ref={container} className="relative cursor-pointer">
      <div className="flex justify-center w-10 h-10  bg-indigo-700 rounded-full text-gray-200">
        <button className="menu focus:outline-none " onClick={() => setShow(!show)}>
          <RiUser3Line size="20" />
        </button>
      </div>
      <Transition
        show={show}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="flex flex-col origin-top-right absolute right-0 w-64 py-2 mt-1 bg-gray-800 rounded shadow-md ">
          {state.user && (
            <>
              <div className="flex space-x-4 m-4 px-4 items-center">
                <div className="flex justify-center w-14 h-14  bg-indigo-700 rounded-full text-gray-200">
                  <a href className="self-center">
                    <RiUser3Line size="30" />
                  </a>
                </div>
                <div className="flex flex-col ">
                  <p className="font-medium text-lg text-gray-200">{state.user?.username}</p>
                  <div className="flex items-center ">
                    <GoPrimitiveDot color={online ? "#00f593" : "gray"} />
                    <p className="text-base text-gray-400">{online ? "online" : "offline"}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center py-4">
                <p className="font-semibold ml-8 text-gray-400">Online</p>

                <div className="relative inline-block w-8 mr-8 align-middle select-none ">
                  <input
                    onChange={() => {
                      setOnline(!online)
                    }}
                    checked={online}
                    type="checkbox"
                    name="toggle"
                    id="toggle"
                    className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-gray-100 border-2 appearance-none cursor-pointer"
                  />
                  <label
                    htmlFor="toggle"
                    className="toggle-label block overflow-hidden h-4 rounded-full ring-2 ring-gray-200 bg-gray-900 cursor-pointer"
                  ></label>
                </div>
              </div>

              <div className="border border-r-0 border-l-0 border-gray-600 ">
                <div className="flex items-center py-2 px-8 text-gray-400 rounded hover:bg-gray-700 hover:text-gray-100  transition ease-in-out duration-400">
                  <RiUserSettingsLine size="20" />
                  <a href className="px-4 py-2 ">
                    Profile
                  </a>
                </div>
                <div className="flex items-center py-2 px-8 text-gray-400 rounded hover:bg-gray-700 hover:text-gray-100  transition ease-in-out duration-400">
                  <HiOutlineUsers size="20" />
                  <a href className=" px-4 py-2 ">
                    Friends
                  </a>
                </div>
                <div className="flex items-center py-2 px-8 text-gray-400 rounded hover:bg-gray-700 hover:text-gray-100  transition ease-in-out duration-400">
                  <FiSettings size="20" />
                  <a href className=" px-4 py-2 ">
                    Settings
                  </a>
                </div>
              </div>
            </>
          )}
          <div className="flex items-center py-2 px-8 text-gray-400 rounded hover:bg-gray-700 hover:text-gray-100  transition ease-in-out duration-400">
            <IoLanguage size="20" />
            <a href className=" px-4 py-2 ">
              Language
            </a>
          </div>
          <div className="flex justify-between items-center py-2 px-8 text-gray-400 rounded hover:bg-gray-700 hover:text-gray-100 transition ease-in-out duration-400">
            <div className="flex items-center">
              <RiMoonLine size="20" />
              <a href className=" px-4 py-2 ">
                Dark theme
              </a>
            </div>
            <div className="relative inline-block w-8 align-middle select-none ">
              <input
                type="checkbox"
                name="dark"
                id="dark"
                className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-gray-100 border-2 appearance-none cursor-pointer"
              />
              <label
                htmlFor="dark"
                className="toggle-label block overflow-hidden h-4 rounded-full ring-2 ring-gray-200 bg-gray-900 cursor-pointer"
              ></label>
            </div>
          </div>
          {!state.user ? (
            <div className="flex items-center py-2 px-8 text-gray-400 rounded hover:bg-gray-700 hover:text-gray-100  transition ease-in-out duration-400">
              <RiLoginBoxLine size="20" />
              <a href="/login" className=" px-4 py-2 ">
                Login
              </a>
            </div>
          ) : (
            <button
              onClick={logout}
              className="flex items-center py-2 px-8 text-gray-400 rounded hover:bg-gray-700 hover:text-gray-100  transition ease-in-out duration-400 focus:outline-none"
            >
              <RiLogoutBoxLine size="20" />
              <a href className=" px-4 py-2 ">
                Log Out
              </a>
            </button>
          )}
        </div>
      </Transition>
    </div>
  )
}

export default Menu
