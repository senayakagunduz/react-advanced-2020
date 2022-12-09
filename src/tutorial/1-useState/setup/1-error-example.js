import React, { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
//axios'u kullandım.
const ErrorExample = () => {
  const [title, setTitle] = useState("random title");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {// eslint-disable-next-line 
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false))
  }, []);
  
  const clickHandler = () => {
    if(title==="random title"){
      setTitle("hello world");
    }else
      setTitle("random title");
  }
  return (
    <React.Fragment>
      <div>
        <h1>{title}</h1>
        <button type="button" className="btn" onClick={clickHandler}>
          Change Title
        </button>
        <br />
        <br/>
        <h1>Users</h1>
        {users.map((user) => (<div key={user.id}>{user.name}</div>))}
      </div>
    </React.Fragment>
  );
};


export default ErrorExample;
