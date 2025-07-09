import React from 'react';
import Child from './Child';

const Parent = () => {
  const array =["Bigyan"]

  return (
    <>
      <h1>Parent Component</h1>
      <Child name={array} />
    </>
  );
}

export default Parent;
