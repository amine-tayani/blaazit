import React, { useContext } from "react"
import { MessageOutlined } from "@ant-design/icons"
import UpVoteButton from "../buttons/UpVoteButton"
import DownVoteButton from "../buttons/DownVoteButton"
import { PostContext } from "../../context/PostContext"
import List from "antd/es/list"
import Avatar from "antd/es/avatar"
import Space from "antd/es/space"

function Post() {
  const { posts, loading } = useContext(PostContext)

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  )
  return (
    <List
      loading={loading}
      itemLayout="vertical"
      size="large"
      dataSource={posts}
      renderItem={(post) => (
        <List.Item
          key={post.id}
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
            avatar={
              <Avatar src="https://styles.redditmedia.com/t5_2th52/styles/communityIcon_b37n2zfs8k861.png" />
            }
            title={post.title}
            description={post.description}
          />
        </List.Item>
      )}
    />
  )
}

export default Post
