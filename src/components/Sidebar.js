import React from 'react'
import { Layout, Menu, Avatar } from "antd";
import { RiseOutlined, FireOutlined, ThunderboltOutlined, CrownOutlined, BorderOuterOutlined } from '@ant-design/icons';
const Sidebar = () => {
  const { Sider } = Layout;
  const { SubMenu } = Menu;
  const avatarSrc = 'https://styles.redditmedia.com/t5_2th52/styles/communityIcon_b37n2zfs8k861.png';
  return (
    < Sider width={250} >
      <Menu
        theme="dark"
        style={{ position: 'fixed', width: 256, height: '100vh', fontFamily: 'Montserrat' }}
        defaultOpenKeys={['sub1', 'sub2']}
        selectedKeys={[1]}
        mode="inline"
      >
        <SubMenu key="sub1" title="Filter by">
          <Menu.Item key="1"><FireOutlined style={{ fontSize: 20 }} />HOT</Menu.Item>
          <Menu.Item key="2"><BorderOuterOutlined style={{ fontSize: 20 }} />NEW</Menu.Item>
          <Menu.Item key="3"><RiseOutlined style={{ fontSize: 20 }} />RISING</Menu.Item>
          <Menu.Item key="4"><ThunderboltOutlined style={{ fontSize: 20 }} />CONTROVERSIAL</Menu.Item>
          <Menu.Item key="5"><CrownOutlined style={{ fontSize: 20 }} />TOP</Menu.Item>
        </SubMenu>

        <SubMenu key="sub2" title="Communities">
          <Menu.Item key="6"><Avatar src={avatarSrc} /> b/savePanda</Menu.Item>
          <Menu.Item key="7"><Avatar src={avatarSrc} /> b/PandaHouse</Menu.Item>
          <Menu.Item key="8"><Avatar src={avatarSrc} /> b/Pandas</Menu.Item>
          <Menu.Item key="9"><Avatar src={avatarSrc} /> b/PandaInBahamas</Menu.Item>
          <Menu.Item key="10"><Avatar src={avatarSrc} /> b/Pandas</Menu.Item>
          <Menu.Item key="11"><Avatar src={avatarSrc} /> b/PandaInBahamas</Menu.Item>
          <Menu.Item key="10"><Avatar src={avatarSrc} /> b/Pandas</Menu.Item>
          <Menu.Item key="11"><Avatar src={avatarSrc} /> b/PandaInBahamas</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider >
  )
}

export default Sidebar
