

import {Form, Button, Input,Table} from"antd"
import { useState } from 'react'
import { DeleteOutlined } from "@ant-design/icons"


const Calculator = () => {
  const [data, setdata] = useState([])
  const onFinish=(values)=>{
  
    const details={ key:data.length+1,

   ...values}


   
   setdata([...data, details])

    

  }
  const deletedata=(key)=>{
    const remove=data.filter((items)=>items.key!==key)
    setdata(remove)
  }
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
          title: "Action",
          key: "action",
          render: (_, record) => (
            <Button danger onClick={() => deletedata(record.key)}>
            <DeleteOutlined/>
            </Button>
          ),
        },

  ]

  return (
    <>
  
    <div className='flex '>
     <div className='bg-white flex justify-center items-center px-5 py-5 rounded-md shadow-md'>
      <Form onFinish={onFinish}>

        <Form.Item 
        label="Name"
        name="name"
        rules={[{required:true , message:"eneer your name"}]}
        >
          <Input
          placeholder='enter a name'
          />


        </Form.Item>
        <Form.Item 
        label="city"
        name="city"
        rules={[{required:true , message:"eneer your city"}]}
        >
          <Input
          placeholder='enter a city'
          />


        </Form.Item>
        <Form.Item 
        label="age"
        name="age"
        rules={[{required:true , message:"eneer your age"}]}
        >
          <Input
          placeholder='enter a age'
          />


        </Form.Item>
        <Button type='primary' htmlType='submit' className='w-full' >Login</Button>
      </Form>
      
    </div>
    </div>
    <Table dataSource={data} columns={columns}rowKey="id"></Table>

      </>
  )
}

export default Calculator
