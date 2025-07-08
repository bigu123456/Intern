import React from 'react';
import Child from './Child';

const Parent = () => {
  const array = [
    { id: 1, name: "bigyan" },
    { id: 2, name: "Bisawash" },
    { id: 3, name: "Ujwal" },
    { id: 4, name: "saroj" },
  ];

  return (
    <>
      <h1>Parent Component</h1>
      <Child name={array} />
    </>
  );
}

export default Parent;
