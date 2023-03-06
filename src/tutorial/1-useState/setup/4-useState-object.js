import React, { useState } from 'react';

// whenever using objects and want to change one property, always use spread operator to keep the old values intact and target only the desired 
// value you want to change.

const UseStateObject = () => {
  // const [person, setPerson] = useState({ name: 'Adam', age: 24, message: 'random message' });

  //you can also set different state value for each property, instead of having an object
  const [name, setName] = useState('adam');
  const [age, setAge] = useState('24');
  const [message, setMessage] = useState('random message');

  const changeMessage = () => {
    // setPerson({ ...person, message: 'hello world' });
    setMessage('hello world');
  };

  return <>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button className='btn' onClick={changeMessage}>Change message</button>
  </>;
};

export default UseStateObject;
