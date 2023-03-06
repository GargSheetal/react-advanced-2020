import React, { useState } from 'react';

// hooks start with the prefix - use. Such as useState, useRef
// component name must be uppercase
// they must be invokded in the component/function body
// cannot call inside conditions


const UseStateBasics = () => {
  // console.log(useState('hello world'))
  const [text, setText] = useState('random title')

  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world')
    }
    else {
      setText('random title')
    }
  }

  return <React.Fragment>
    <h1>{text}</h1>
    <button className='btn' onClick={handleClick}>Change Title</button>
  </React.Fragment>
};

export default UseStateBasics;