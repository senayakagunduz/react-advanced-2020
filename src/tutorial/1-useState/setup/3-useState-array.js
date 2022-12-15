import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people,setPeople]=useState(data);

  const removeItem=(id)=>{
    let newPeople=people.filter((person)=>person.id!==id)
    setPeople(newPeople);
  }
  return (
    <>
      {
        people.map((person)=>{
          const {id,name}=person;
          return(
            <div key={id} className="item">
              <h3>{name}</h3>
              <button className="btn" onClick={()=>removeItem(id)}>remove item</button>  
            </div>
          )
          
        })}
      <button onClick={()=>setPeople([])} className="btn">Delete items</button>
    </>
  );
};

export default UseStateArray;
