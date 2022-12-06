import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        Click to size
      </button>
      {show && <Item />}
    </>
  );
};
const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
  });
  return (
    <div>
      <h2>Window</h2>
      <h2>{size}</h2>
    </div>
  );
};

export default ShowHide;
