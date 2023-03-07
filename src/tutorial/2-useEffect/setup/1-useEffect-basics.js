import React, { useState, useEffect } from 'react';

// by default runs after every re-render if you do not have the second paramenter

// second parameter: you can pass a second parameter in the useEffect function. It is an array of dependencies. So if you want your useEffect
// to render only once i.e. on the initial render, in this case pass the second argument as a empty array []. If you want it run after 
// every re=render, pass that dependency in the array which in this case is the value.
// you can have any number of useEffect 

// cleanup function

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('call useEffect');
    if (value > 0) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log('hello world !');
  }, [])

  console.log('render component');
  return <>
    <h1>{value}</h1>
    <button className='btn' onClick={() => setValue(value + 1)}>click me</button>
  </>;
};

export default UseEffectBasics;
