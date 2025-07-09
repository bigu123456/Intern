import React from 'react';






const Child = (props) => {
  console.log('props in Child:', props);


  return (
    <>
      <h1>Child Component</h1>
          <h1>{props.name}</h1>
    
    </>
  );
}

export default Child;
