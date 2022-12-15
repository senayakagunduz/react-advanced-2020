import React, { useState } from "react";

const MoreComplexCounter = () => {
  const [value,setValue]=useState(0);
  const complexIncrease=()=>{
    setTimeout(()=>{
      // setValue(value +1)bunu kullanmıyoruz çünkü kullanılan value yu artırıyor.
      setValue((prevState)=>{
        return prevState + 1;
      })
    },2000)
  }
  return (
    <>
      <section style={{margin:"4rem 0"}}>
        <h2>More complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={()=>setValue(value + 1)}>increase</button>
        <button className="btn" onClick={()=>setValue(value - 1)}>decrease</button>
        <button className="btn" onClick={()=>setValue(0)}>reset</button>

        <h2>Regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>Complex increase</button>
      </section>
    </>
  )
};

export default MoreComplexCounter;
