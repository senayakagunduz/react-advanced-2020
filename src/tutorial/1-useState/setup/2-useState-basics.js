import React, { useState } from "react";
import { useEffect } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("random title");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const handleClick = () => {
    if (text === "random title") {
      setText("hello world")
    } else {
      setText("random title");
    }
  }
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((e)=>console.log(e))
      .finally(()=>setIsLoading(false));
  }, [])

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <h3>UseState Basic Example</h3>
      <button type="button" className="btn" onClick={handleClick} >
        Change Button
      </button>
      <h2>{isLoading}</h2>
      {isLoading && <div>Loading...</div>}
      <h1>Users</h1>
      {
        users.map((user) => <div key={user.id}>{user.name}</div>)
      }
    </React.Fragment>
  );
};

export default UseStateBasics;
