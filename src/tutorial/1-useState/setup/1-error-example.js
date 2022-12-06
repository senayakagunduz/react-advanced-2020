import React,{useState} from "react";

const ErrorExample = () => {
const [title,setTitle]=useState("random title");
console.log(title);
const clickHandler=()=>{
  let title="hello world"
  console.log(title);
}
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button type="button" className="btn" onClick={clickHandler}>
        Change Title
      </button>
    </React.Fragment>
  );
};


export default ErrorExample;
