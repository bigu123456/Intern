import React from 'react'
import{Button,Input,Form,InputNumber} from "antd";
import { UserOutlined, LockOutlined, HomeOutlined, NumberOutlined} from '@ant-design/icons';
import { useState } from 'react';
import { DatabaseBackupIcon } from 'lucide-react';


const Ant = () => {
 const [age, setage] = useState("")
  const [username, setUsername] = useState("")
  const [city, setcity] = useState("");
  const [password, setpassword] = useState("")
  const [move, setmove] = useState("")
  const onFinish=(values)=>{
    console.log("submitted",values);
    setage(values.age);
    setUsername(values.username);
    setcity(values.city);
    setpassword(values.password);

  }
  const data=()=>{
    setmove({age,username,password,city})
  }


  return (
    <>
    <div className='flex  bg-orange-600'>
      <div className='flex justify-center items-center w-1/2 h-screen'>
        <Form onFinish={onFinish} className=' bg-white rounded-lg shadow-sm p-10' >
    <Form.Item  
    label="username"
    name="username"
    rules={[{required:true, message:"entr valid username"}]}
    >
      <Input
      placeholder='enter your username'
      prefix={< UserOutlined/>}
      />

    </Form.Item>
    <Form.Item  
    label="password"
    name="password"
    rules={[{required:true, message:"entr valid password"}]}
    >
      <Input.Password
      placeholder='enter your password'
      prefix={< LockOutlined/>}
      />

    </Form.Item>
    <Form.Item  
    label="age"
    name="age"
    rules={[{required:true, message:"entr valid age"}]}
    >
      <InputNumber
      placeholder='enter your age'
      prefix={< NumberOutlined/>}
      className='w-full'
      />

    </Form.Item>
    <Form.Item  
    label="city"
    name="city"
    rules={[{required:true, message:"entr valid city"}]}
    >
      <Input
      placeholder='enter your city'
      prefix={<  HomeOutlined/>}
      />

    </Form.Item>
    <Button type='primary' htmlType='submit' className='w-full'>submit</Button>
  </Form>
        

      </div>
      <div className=' flex  flex-col w-1/2 h-screen justify-center items-center bg-yellow-500'>
  <div className=' bg-white rounded-lg shadow-sm p-10 '>
    <h1> here is your details:</h1>
<h1> username:{username}</h1>
    <h1> password:{password}</h1>
    <h1> age:{age}</h1>
    <h1> city:{city}</h1>
    
  </div>
    
  </div>

       <div className=' flex  flex-col w-1/2 h-screen justify-center items-center bg-yellow-500'>
  <div className=' bg-white rounded-lg shadow-sm p-10 '>
    <h1> here is your details:</h1>
<h1> username:{move.username}</h1>
    <h1> password:{move.password}</h1>
    <h1> age:{move.age}</h1>
    <h1> city:{move.city}</h1>
    <Button type='primary' onClick={data}>click here to show your details</Button>
  </div>
    
  </div>
  
  </div>

  
  </>
  
  )
}

export default Ant