import React from 'react'
import {Table,Button} from "antd"

const Child = (props) => {
const { persons,message } = props;

  console.log(persons);

  const columns=[

    {
    title:"id",
    dataIndex:"id",
    key:"id"

    },
     {
    title:"name",
    dataIndex:"name",
    key:"name"

    },
     {
    title:"age",
    dataIndex:"age",
    key:"age"

    },
     {
    title:"city",
    dataIndex:"city",
    key:"city"

    },
   
  ]

  

    const sendData = () => {
    if (message) {
     
     message("hello")
    }
  };

  return (
    <>
      <Table dataSource={persons} columns={columns} rowKey="id" />
      <Button type="primary" onClick={sendData}> Send Message to Parent</Button>
    </>
  );
};

export default Child;