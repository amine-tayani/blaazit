import React, { useContext } from 'react'
import { Typography, List, Avatar, Space, Button } from 'antd';
import UserContext from '../UserContext'
import Sidebar from "./Sidebar";
import Header from './Header'
import { MessageOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';

const Homepage = () => {
  const { Title } = Typography
  const posts = useContext(UserContext)


  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="grid grid-rows-3 grid-flow-col gap-14 flex-1 overflow-y-auto">
        <div >
          <Sidebar />
        </div>
        <div className="row-end-3 row-span-2 font-sans mt-8">
          <List
            header={<Title level={4}>Popular</Title>}
            itemLayout="vertical"
            size="large"
            dataSource={posts}
            renderItem={post => (
              <List.Item
                key={post.title}
                actions={[
                  <Button type="primary" icon={<UpOutlined />} >  {post.upVotes ? post.upVotes : 0}</Button>,
                  <Button type="danger" icon={<DownOutlined />} >  {post.downVotes ? post.downVotes : 0}</Button>,
                  <IconText icon={MessageOutlined} text="2 comments" key="list-vertical-message" />,
                ]}
                extra={
                  <img
                    width={272}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                }
              >
                <List.Item.Meta
                  avatar={<Avatar src="https://styles.redditmedia.com/t5_2th52/styles/communityIcon_b37n2zfs8k861.png" />}
                  title={<a>{post.title}</a>}
                  description={post.description}
                />
              </List.Item>
            )}
          />

        </div>
        <div className="row-start-1 row-end-4 ">

        </div>
      </div>
    </div>
  )
}

export default Homepage

