import { useState, useContext } from "react"
import {
  BulbOutlined,
  FireTwoTone,
  LoginOutlined,
  UserOutlined,
  PoweroffOutlined,
  SettingOutlined,
} from "@ant-design/icons"
import Dropdown from "antd/es/dropdown"
import Menu from "antd/es/menu"
import Switch from "antd/es/switch"
import { Link, useHistory } from "react-router-dom"
import Search from "./search/Search"
import { authContext } from "../context/authContext"

const Navbar = () => {
  const { logout, state } = useContext(authContext)
  const history = useHistory()
  const [visible, setVisible] = useState(false)
  const user = state.user

  const handleLogout = async () => {
    try {
      await logout()
      history.push("/login")
    } catch (err) {
      console.log(err)
    }
  }

  const handleClickMenu = (e) => {
    if (e.key === "5") {
      setVisible(true)
    }
  }
  const handleVisibleChange = (flag) => {
    setVisible(flag)
  }

  const menu = (
    <Menu
      onClick={handleClickMenu}
      theme="dark"
      style={{
        fontFamily: "quicksand",
        marginTop: 10,
        backgroundColor: "#111827",
        borderRadius: "10px",
      }}
    >
      <Menu.Item key="1" icon={<BulbOutlined style={{ fontSize: 20 }} />}>
        Dark Theme
        <Switch style={{ marginLeft: "12px" }} size="small" />
      </Menu.Item>
      {!user ? (
        <Menu.Item key="2" icon={<LoginOutlined style={{ fontSize: 20 }} />}>
          Login
        </Menu.Item>
      ) : (
        <>
          <Menu.Item key="3" icon={<UserOutlined style={{ fontSize: 20 }} />}>
            {user.email.substring(0, user.email.lastIndexOf("@"))}
          </Menu.Item>
          <Menu.Item key="4" icon={<SettingOutlined style={{ fontSize: 20 }} />}>
            Setting
          </Menu.Item>
          <Menu.Item
            onClick={handleLogout}
            key="5"
            icon={<PoweroffOutlined style={{ fontSize: 20 }} />}
          >
            Log Out
          </Menu.Item>
        </>
      )}
    </Menu>
  )
  return (
    <div>
      <header className=" text-gray-600 font-sans bg-gray-900 ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/">
            <div
              href="true"
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            >
              <FireTwoTone style={{ fontSize: "20px" }} />
              <span className="ml-3 text-xl font-bold text-gray-50">Blaaz</span>
              <span className="text-xl font-bold text-red-300"> it</span>
            </div>
          </Link>
          {/* search compononent */}
          <div className="mx-auto -mr-28 font-serif ">
            <Search />
          </div>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {!user && (
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
            <Dropdown
              onVisibleChange={handleVisibleChange}
              visible={visible}
              trigger="click"
              overlay={menu}
            >
              <a href="true" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                <div className="rounded-full bg-gray-700 border-2 p-3 relative flex items-center justify-center">
                  <div className="absolute">
                    <UserOutlined style={{ fontSize: "1.3rem", color: "#fff" }} />
                  </div>
                </div>
              </a>
            </Dropdown>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar
