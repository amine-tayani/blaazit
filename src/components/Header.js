import React, { useState } from 'react';
import { BulbOutlined, DownOutlined, FireTwoTone, LoginOutlined, UserOutlined, PlusOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Switch } from 'antd';
import { Link } from 'react-router-dom';
import Search from './search/Search';
import AddPost from './post/AddPost'


function Header() {
  const [visible, setVisible] = useState(false)
  const handleClickMenu = (e) => {
    if (e.key === '3') {
      setVisible(true)
    }
  }
  const handleVisibleChange = (flag) => {
    setVisible(flag)
  }

  const menu = (
    <Menu onClick={handleClickMenu} theme="dark" style={{ fontFamily: 'quicksand', marginTop: 10, backgroundColor: '#111827' }}>
      <Menu.Item key="1" icon={< BulbOutlined style={{ fontSize: 20 }} />}>
        Night Mode
        <Switch style={{ marginLeft: '12px' }} size="small" />
      </Menu.Item>
      <Menu.Item key="2" icon={<LoginOutlined style={{ fontSize: 20 }} />}>
        {/* need Link component here  */}
          Login
      </Menu.Item>
      <Menu.Item key="3" icon={<PlusOutlined style={{ fontSize: 20 }} />}>
        <Link to="/post/add">
          Add Post
        </Link>
      </Menu.Item>
    </Menu >
  );
  return (
    <div>
      <header className=" text-gray-600 font-sans bg-gray-900">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/">
            <a href className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <FireTwoTone style={{ fontSize: '20px' }} />
              <span className="ml-3 text-xl font-bold text-gray-50">Blaaz</span><span className="text-xl font-bold text-red-300"> it</span>
            </a>
          </Link>
          {/* search compononent */}
          <div className="mx-auto -mr-28 font-serif ">
            <Search />
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/signup">
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex font-bold text-white bg-gray-700 border-0 py-1 px-4 focus:outline-none rounded mr-2 hover:bg-gray-600 transition duration-200 ease-in-out ">Sign up
              </button>
            </Link>
            <Link to="/login">
              <button className="mr-4 lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none rounded font-bold hover:bg-indigo-600 transition duration-200 ease-in-out">Login
              </button>
            </Link>
            <Dropdown onVisibleChange={handleVisibleChange} visible={visible} trigger='click' overlay={menu}>
              <a href className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <UserOutlined style={{ fontSize: '1.5rem', marginRight: 8, color: '#fff' }} />
                <DownOutlined style={{ fontSize: '0.5rem', color: '#fff', marginTop: '10px' }} />
              </a>
            </Dropdown>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
