import React, { createContext, useEffect, useState } from "react"
import { db } from "../base"

export const PostContext = createContext()

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    db.collection("posts")
      .orderBy("title")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data())
        setPosts(data)
        setLoading(false)
      })
  }, [])
  return <PostContext.Provider value={(posts, loading)}>{children}</PostContext.Provider>
}
