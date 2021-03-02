import React from 'react'
import { Dropdown, Menu, Switch } from 'antd'
import { FireTwoTone, DownOutlined, UserOutlined, BulbOutlined, LoginOutlined, SearchOutlined } from '@ant-design/icons';


function Header() {
  const menu = (
    <Menu theme="dark" style={{ fontFamily: 'montserrat', marginTop: 20 }}>
      <Menu.Item key="1" icon={< BulbOutlined style={{ fontSize: 20 }} />}>
        Night Mode
        <Switch checked style={{ marginLeft: '12px' }} defaultChecked size="small" />
      </Menu.Item>
      <Menu.Item key="2" icon={<LoginOutlined style={{ fontSize: 20 }} />}>
        Login
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <header className=" text-gray-600 font-sans bg-gray-900">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <FireTwoTone style={{ fontSize: '20px' }} />
            <span className="ml-3 text-xl font-bold text-gray-50">Blaaz</span><span className="text-xl font-bold text-red-300"> it</span>
          </a>
          <div className="mx-auto mr-40 font-serif ">
            <div class="border-transparent rounded overflow-hidden flex">
              <button class="bg-gray-700 flex items-center justify-center px-4 focus:outline-none ">
                <SearchOutlined style={{ color: 'white' }} />
              </button>
              <input type="text" class="bg-gray-700 w-96 px-2 py-2 focus:outline-none" placeholder="Find community or post" />

            </div>
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex font-bold text-white bg-gray-700 border-0 py-1 px-4 focus:outline-none rounded mr-2 ">Sign up
          </button>
            <button className="mr-4 lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none rounded font-bold ">Login
          </button>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <UserOutlined style={{ fontSize: 22, marginRight: 8, color: '#fff' }} />
                <DownOutlined style={{ fontSize: '0.5rem', color: '#fff' }} />
              </a>
            </Dropdown>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
