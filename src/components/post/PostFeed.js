import { useEffect, useState } from "react"
import AddPost from "./AddPost"
import Post from "./Post"

const PostFeed = () => {
  const [user, setUser] = useState("")

  useEffect(() => {
    const getAPI = async () => {
      const response = await fetch("http://localhost:8080/")
      const data = await response.json()

      try {
        console.log(data)
        setUser(data)
      } catch (error) {
        console.log(error)
      }
    }
    getAPI()
  }, [])
  return (
    <>
      <AddPost />
      <Post />
      <Post />
      <Post />
    </>
  )
}

export default PostFeed
