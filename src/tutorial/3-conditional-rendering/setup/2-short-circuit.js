import React, { useState } from 'react';

// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';   // if text is available i.e. true, then text will be returned else hello world
  // const secondValue = text && 'hello world';  // if text is available, then hello world will be returned and vice versa

  return <>
    {/* <h2>{firstValue}</h2>
    <h2>value: {secondValue}</h2> */}
    <h2>{text || 'john doe'}</h2>
    <button className='btn' onClick={() => { setIsError(!isError) }}>toggle error</button>
    {isError && <h2>Error...</h2>}
    {/* ternary operator */}
    {isError ? <p>there is an error...</p> :
      (<div>
        <h2>there is no error</h2>
      </div>)}
  </>;
};

export default ShortCircuit;
