import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    namee: "Beyza",
    age: "5",
    message: "I love you",
  });
  const [name, setName] = useState("Ayşe");
  const [age, setAge] = useState(8);
  const [message, setMessage] = useState("Me too");
  const changeMessage = () => {
    // setPerson({ ...person, message: "I Love my mom" });
    setMessage("I love you mom too");
  };
  return (
    <>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <h2>{message}</h2>

      <div className="btn" onClick={changeMessage}>
        Change Message
      </div>
    </>
  );
};

export default UseStateObject;
