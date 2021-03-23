import React, { createContext, useEffect, useState } from 'react'
import { db } from '../base'

export const PostContext = createContext()


export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection("posts")
      .orderBy("title")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setPosts(data)
      });
  }, []);
  return (
    <PostContext.Provider value={posts}>
      {children}
    </PostContext.Provider>
  );
}


