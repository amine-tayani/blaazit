import React, { useContext } from 'react'
import { MessageOutlined } from '@ant-design/icons';
import UpVoteButton from '../buttons/UpVoteButton'
import DownVoteButton from '../buttons/DownVoteButton'
import { PostContext } from '../../context/PostContext'
import { Typography, List, Avatar, Space } from 'antd';




function Post() {

  const { Title } = Typography
  const posts = useContext(PostContext)

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  return (
    <List
      header={<Title level={4}>Popular</Title>}
      itemLayout="vertical"
      size="large"
      dataSource={posts}
      renderItem={post => (
        <List.Item
          key={post.title}
          actions={[
            <UpVoteButton votes={post.upVotes} />,
            <DownVoteButton votes={post.downVotes} />,
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
            title={<a href>{post.title}</a>}
            description={post.description}
          />
        </List.Item>
      )}
    />

  )
}

export default Post
