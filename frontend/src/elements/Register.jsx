import React from 'react'
import {Form, Input, Button,Table} from "antd"
const Register = (props) => {
    const{data,details}=props;
    const columns=[
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
        {
            title:"number",
            dataIndex:"number",
            key:"number"
        }
    ]
    


   
  return (
    <>
    <div className='flex'>

        
    <Form onFinish={data}>
<Form.Item 
name="name"
rules={[{required:true, message:"enetr your name"}]}
>
    <Input
    placeholder='enetr your name'
    />
    </Form.Item>
    <Form.Item 
name="age"
rules={[{required:true, message:"enetr your age"}]}
>
    <Input
    placeholder='enetr your age'
    />
    </Form.Item>

<Form.Item 
name="city"
rules={[{required:true, message:"enetr your city"}]}
>
    <Input
    placeholder='enetr your city'
    />
    </Form.Item>

<Form.Item 
name="number"
rules={[{required:true, message:"enetr your  number"}]}
>
    <Input
    placeholder='enetr your number'
    />
    </Form.Item>
    <Button type='primary' htmlType='submit'>Submit</Button>


    </Form>
    </div>
    <Table dataSource={details} columns={columns} rowKey="id"></Table>
    
    </>
  )
}

export default Register