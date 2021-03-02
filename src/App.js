import React, { useState, useEffect } from 'react';
import HomePage from './components/Homepage';
import { UserProvider } from './UserContext';
import db from './base'

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Hook to handle the initial fetching of posts
    db.collection("posts")
      .orderBy("title")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data)
        setPosts(data);
      });
  }, []);
  return (
    <UserProvider value={posts}>
      <HomePage />
    </UserProvider>
  );
}

export default App;
