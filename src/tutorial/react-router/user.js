import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
function User() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => setUser(response.data))
      .then((e) => console.log(e))
      .finally(() => setIsLoading(false))
  }, [id])
 
  // const removeItem=(id)=>{
  //   setUser((oldUser)=>{
  //     let newUser=oldUser.filter((user)=>user.id!==id)
  //     return newUser;
  //   })
  // }
  return (
    <div>
      <h2>User Detail</h2>
      {isLoading && <div>Loading...</div>}
      {!isLoading && <code>{JSON.stringify(user)}</code>}
      {/* id:{id} */}
      {/* <button onClick={()=>setUser()}>Next User</button> */}
      <Link to={`/users/${parseInt(id)+1}`}>Next User({parseInt(id)+1})</Link>
      {/* <button onClick={()=>removeItem(id)}>remove</button>*/}
    </div>

  )
}
export default User;