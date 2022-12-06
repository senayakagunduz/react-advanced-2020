import React, { useState } from "react";
import { useEffect } from "react";

const UseStateBasics = () => {
 const [text, setText] = useState("random title"); 
 const [users,setUsers]=useState([]);
 const handleClick=()=>{
  if(text==="random title"){
    setText("hello world")
   }else{
    setText("random title");
   }
}
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>response.json())
  .then(users=>setUsers(users))
},[])

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <h3>UseState Basic Example</h3>
      <button type="button" className="btn" onClick={handleClick} >
        Change Button
      </button>
      <h1>Users</h1>{
        users.map((user)=><div key={user.id}>{user.name}</div>)
      }
    </React.Fragment>
  );
  };

export default UseStateBasics;
