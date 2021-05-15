import { useFetch } from "../../hooks/useFetch"
import AddPost from "./AddPost"
import Post from "./Post"

const PostFeed = () => {
  const endpoint = "/api/posts"
  const { loading, data } = useFetch(endpoint)
  return (
    <>
      <AddPost />
      {data.map((post) => {
        return <Post post={post} loading={loading} key={post._id} />
      })}
    </>
  )
}

export default PostFeed
