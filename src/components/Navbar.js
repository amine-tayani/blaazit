import { useContext } from "react"
import { Link } from "react-router-dom"
import { AiTwotoneFire } from "react-icons/ai"
import Search from "./search/Search"
import { userContext } from "../context/authContext"
import Menu from "../components/Menu"

const Navbar = () => {
  const { userData, logout } = useContext(userContext)

  return (
    <div>
      <header className=" text-gray-600 font-sans bg-gray-900 fixed top-0 inset-x-0 z-50 ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/">
            <div
              href="true"
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            >
              <AiTwotoneFire color="orange" size="26" />
              <span className="ml-3 text-xl font-bold text-gray-50 tracking-wide">Blaazit</span>
            </div>
          </Link>
          {/* search compononent */}
          <div className="mx-auto -mr-28 font-serif ">
            <Search />
          </div>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {userData && (
              <>
                <Link to="/signup">
                  <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex font-bold text-white bg-gray-700 border-0 py-1 px-4 focus:outline-none rounded mr-2 hover:bg-gray-600 transition duration-200 ease-in-out ">
                    Sign up
                  </button>
                </Link>
                <Link to="/login">
                  <button className="mr-4 lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none rounded font-bold hover:bg-indigo-600 transition duration-200 ease-in-out">
                    Login
                  </button>
                </Link>
              </>
            )}
            <Menu handlelogout={logout} user={userData} />
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar
