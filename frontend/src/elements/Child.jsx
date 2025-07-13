import React from 'react'
import { Table} from "antd"
import {Button, Form,Input} from "antd";



const Child = (props) => {
  const{user,addperson}=props
  console.log(user);

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

  
  return (
    <>
    
    <div className='bg-yellow-300 rounded-sm shadow-sm py-5 w-1/5'>
      <Form  onFinish={addperson}>
<Form.Item 
name="name"
rules={[{required:true, message:"enetr your name"}]}
>
  <Input
  placeholder='enetr your name'
  className='w-40'
  />

</Form.Item>
<Form.Item
name="age" 

rules={[{required:true, message:"enetr your age"}]}
>
  <Input
  placeholder='enetr your name'
  className='w-40'
  />

</Form.Item>
<Form.Item 
name="city"

rules={[{required:true, message:"enetr your city"}]}
>
  <Input
  placeholder='enetr your name'
  className='w-40'
  />

</Form.Item>
<Button type='primary' htmlType='submit' >add</Button>

    </Form>
     
    </div>
<Table dataSource={user} columns={columns} rowKey="id"></Table>

    
  
   
    </>
  )
}




export default Child