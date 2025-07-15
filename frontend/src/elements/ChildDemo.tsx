import React from 'react';
import {Button} from "antd"






const ChildDemo = ({ text, settext }) => {
  return (
    <>
      <h1>childdemo</h1>
      <p>Number from parent: {text}</p>

    
     
      <Button  type='primary' onClick={()=>settext("hello from childdemo")}>click</Button>
    </>
  );
};

export default ChildDemo;
