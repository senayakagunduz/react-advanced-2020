import React, { useState } from "react";

const UseStateObject = () => {
const [person,setPerson]=useState({
  namee:"Beyza",
  age:6,
  message:"random message!"
})
const changeMessage=()=>{
  //mesaj haricinde diğer verilerin de kalması için ...person demeliyiz.
  setPerson({...person,message:"hello world"});
}
  return (
    <>
      <div>{person.namee}</div>
      <div>{person.age}</div>
      <div>{person.message}</div>
      <button className="btn" onClick={changeMessage}>{changeMessage}</button>
    </>
  );
};

export default UseStateObject;
