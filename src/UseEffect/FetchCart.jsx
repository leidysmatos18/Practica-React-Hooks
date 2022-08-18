import React, { useCallback, useEffect, useState } from 'react'
import getUser from '../helpers/getUser';
import getPosts from '../helpers/getPosts';

// const inicialUser = {
//   name: "leidys",
//   email: "correo@gmail.com"
// }

// const inicialPosts = [
//   {id: 1, title: "post 1"},
//   {id: 2, title: "post 2"}

// ]

const FetchCart = () => {

  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  const updateUser = () => {
    getUser()
      .then((newUser)=> {
        setUser(newUser)
      })
  };

  const updatePosts = useCallback(() => {
    getPosts(user.id)
      .then( newPost => {
        setPosts(newPost)  
        console.log(newPost)
      })  
  }, [user.id])
  
  useEffect(() => {
    updateUser();
  }, []);

  useEffect(() => {
    if(user?.id) {
      updatePosts()
    }
  }, [user, updatePosts])

  return (
    <div>
      <h1>FetchCart</h1>

      <h2>{user.name}</h2>
      <h3>{user.email}</h3>
      <button onClick={updateUser}>Update User</button>
      <br />

      <h2>Posts - User: {user.id}</h2>
      {
        <ul>
          {posts.map(post => (
              <li key={post.id}>{post.name}</li>
          ))}
        </ul>
      }
    </div>
  )
}

export default FetchCart