import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function User() {
  const[user,setUser]=useState({});
  const [isLoading,setIsLoading]=useState(true);
  useEffect(()=>{
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response)=>setUser(response.data))
    .then((e)=>console.log(e))
    .finally(()=>setIsLoading(false))
  },[])
  const { id } = useParams();
  return (
    <div>
      <h2>User Detail</h2>
      {isLoading && <div>Loading...</div>}
       id:{id}
    </div>

  )
}
export default User;