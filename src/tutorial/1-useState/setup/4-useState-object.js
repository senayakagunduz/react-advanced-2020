import React, { useState } from 'react';

const UseStateObject = () => {
 const [person,setPerson]=useState({
     name:'Peter',
     age:25,
     message:'random message',
 });
 const[name,setName]=useState('Peter');
 const[age,setAge]=useState(24);
 const[message,setMessage]=useState('random message');

 const changeMessage = () =>{
   setMessage('hello world');
   //setPerson({...person,message:'hello world'});
 };
 return (
    <>
  <h3>{name}</h3>
  <h3>{age}</h3>
  <h3>{message}</h3>
  <button className='btn' onClick={changeMessage}>Change Message</button>
 </>
 );

};

export default UseStateObject;
