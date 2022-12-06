import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };
  const complexIncrease = () => {
    setTimeout(() => {
      setValue(value + 1);
    });
  };
  return (
    <>
      <h2>Regular Counter</h2>
      <h2>{value}</h2>
      <button className="btn" onClick={() => setValue(value + 1)}>
        increase
      </button>
      <button className="btn" onClick={reset}>
        reset
      </button>
      <button className="btn" onClick={() => setValue(value - 1)}>
        decrease
      </button>
      <p>------------------------------------------------------------</p>
      <p>------------------------------------------------------------</p>
      <h2>Complex Counter</h2>
      <h2 style={{ margin: "0.4 rem 0" }}>{value}</h2>
      <button className="btn" onClick={() => complexIncrease}>
        increase later
      </button>
    </>
  );
};

export default UseStateCounter;
