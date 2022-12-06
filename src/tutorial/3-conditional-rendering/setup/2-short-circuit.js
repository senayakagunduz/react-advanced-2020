import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [isError, setIsError] = useState("");
  const [isLogin, setIsLogin] = useState("true");

  // const firstValue = text && "hello world";
  // const secondValue = text || "hello";
  return (
    <>
      {isError ? <div>hello</div> : <div>Login</div>}
      {/* <h1>{firstValue}</h1>
      <h1>{secondValue}</h1> */}
    </>
  );
};

export default ShortCircuit;
