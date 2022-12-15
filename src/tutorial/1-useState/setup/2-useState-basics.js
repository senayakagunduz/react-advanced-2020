import React, { useState } from "react";
import { useEffect } from "react";
import {data} from "../../../data"

const UseStateBasics = () => {
  const [text, setText] = useState("random title");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [people,setPeople]=useState(data);

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
  const clearItems=()=>{
    const filteredItems=setPeople([]);
    return filteredItems;
  }
const removeItem=(id)=>{
  let newPeople=people.filter((person)=>person.id!==id);
  setPeople(newPeople);
}
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
      <h1>People</h1>
      {
        people.map((person)=>{
          const{id,name}=person;
          return(
            <div key={id} className="item">
              <h4>{name}</h4>
              <button onClick={()=>removeItem(id)}></button>
            </div>
          )
        })
      }
      {/* yada onclick'e ()=>setPeople([]) yazarız*/}
      <button className="btn" onClick={clearItems}>Clear items</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
