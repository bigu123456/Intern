import React from 'react'
import { Button, Form,InputNumber,Input } from 'antd'
import { useState } from 'react'


const Data = () => {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
   const [city, setcity] = useState("")
    const [age, setage] = useState("")
  


 
  const onFinish=(values)=>{
    console.log("sucess",values)
    setusername(values.username);
    setpassword(values.password)
    setcity(values.city);
    setage(values.age);

    

  }
  return (
   <>
 <div className='flex '>    
 <div className='flex justify-center items-center h-screen w-full bg-yellow-800 '>


      <Form  onFinish={onFinish} className='rounded-lg shadow-sm bg-white p-10'> 
        <h1> welcome to intern</h1>
      <Form.Item  
      label="username"
      name="username"
      rules={[{required:true,message:"plz enetr valid username"}]}
      >
        <Input
        placeholder='enetr your username'
        />


      </Form.Item>
      <Form.Item  
      label="password"
      name="password"
      rules={[{required:true,message:"plz enetr valid username"}]}
      >
        <Input
        placeholder='enetr your username'
        />


      </Form.Item>
      <Form.Item  
      label="age"
      name="age"
      rules={[{required:true,message:"plz enetr valid username"}]}
      >
        <InputNumber
        placeholder='enetr your username'
        className='w-full'
        />


      </Form.Item>
      <Form.Item  
      label="city"
      name="city"
      rules={[{required:true,message:"plz enetr valid username"}]}
      >
        <Input
        placeholder='enetr your username'
        />


      </Form.Item>
      <Button type='primary' htmlType='submit' className='w-full'> submit</Button>


    </Form>
    </div>
    <div className='flex  flex-col justify-center items-center  bg-yellow-400 h-screen w-full'>
      <div className=' bg-white p-10'>
      <h1>username:{username}</h1>
      <h1>password:{password}</h1>
      <h1>city:{city}</h1>
      <h1>age{age}</h1>
    </div>

    </div>
     <div className='flex  flex-col justify-center items-center  bg-yellow-400 h-screen w-1/2'>
      <div className=' bg-white p-10'>
      <h1>username:{username}</h1>
      <h1>password:{password}</h1>
      <h1>city:{city}</h1>
      <h1>age{age}</h1>
    </div>

    </div>
    
    
   </div>
   </>
  )
}

export default Data