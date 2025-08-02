import React from 'react'
import{Button, Input, Form} from "antd"
import { MailOutlined } from '@ant-design/icons';
import { UserOutlined, LockOutlined, SafetyOutlined } from '@ant-design/icons';
import top from "../images/top.png"

const Log = () => {
    const onFinsih=(value)=>{
        console.log(value)

    }
  return (
   <>
  

   
   
   <div className='flex   justify-center items-end  bg-gray-300'>
    <div className='bg-purple-100 rounded-md shadow-md px-10 py-10 '>
        <img src={top} alt='top' className='w-64 auto-cover'></img>
         <div>
    <h1> Register</h1>
    <p > No account? Register Now</p>
   </div>
    <Form onFinish={onFinsih} >
        <Form.Item
        name="Email"
        rules={[{required:true,message:"enetr email"}]}
        >
        <Input
         prefix={<MailOutlined/>}
        placeholder='Email'
        />
        </Form.Item>
         <Form.Item
        name="Username"
        rules={[{required:true,message:"enetr username"}]}
        >
        <Input
         prefix={<UserOutlined/>}
        placeholder='   Username'
        />
         </Form.Item>
         <Form.Item
        name="Password"
        rules={[{required:true,message:"enetr Password"}]}
         >
             <Input
         prefix={<LockOutlined/>}
        placeholder='Password'
        />
        </Form.Item>
         <Form.Item
        name="Confirm Password"
        rules={[{required:true,message:"enter Confirm password"}]}
         ><Input
         prefix={<SafetyOutlined/>}
        placeholder='Confirm Password'
        />
        </Form.Item>
        <Button htmlType='submit' className='w-full bg-purple-400'>Sign Up</Button>
    </Form>
    <div className='py-7'>
        <p>Already have an account</p>
        <div className=' flex justify-center items-center'>
            <Button  type='link'  htmlType='submit'>Sign up</Button>
        </div>
          <img src={top} alt='top' className='max-w-72  auto-cover'></img>
        

    </div>
    
     </div>
     </div>
    
     
     </>
  )
}

export default Log