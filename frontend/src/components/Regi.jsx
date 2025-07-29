import React from 'react'
import{ Input,Button,Form} from "antd"
import  mid from "../images/mid.webp"
import health from "../images/health.png"



const Regi = () => {
 
  const[form]=Form.useForm()

  const onFinish=(values)=>{
   form.resetFields()
   console.table(values)
    console.count()
    
  }
  return (
    <>
  
    <div className='flex' >
      <div className='bg-blue-950 w-1/3 h-screen '>
      <div className='flex flex-col justify-between h-screen px-10'>
        <img src={mid}alt='mid' className='w-20 py-10'></img>
        <div className='space-x-4 flex flex-col'>
    
        <h3 className='text-white'>Check the status </h3>
        
        <p className='text-white'> MIDAS EMR ERP V25.0.0.1</p>

        </div>
        
      
      </div>
      </div>
      
     <div className='   flex justify-center items-center  w-1/2 max-h-screen'>
     
     <div className='bg-white rounded-md shadow-md px-5 py-5  '>
     <img src={health} alt="health" className="w-20" />
       <p className='text-black'>Welcome back</p>
      <p className='text-xs'>Enter your username and password to sign in</p>
     
       <Form form={form} onFinish={onFinish}>
        <Form.Item
    
        label="username"
        name="username"
        rules={[{required:true, message:"enter your name"},
          {min:6, message:"enetr minimun 6 character"}
        ]}
        >
          <Input
          
          placeholder='enetr your name'/>
          
          


        </Form.Item>
        <Form.Item
        label="password"
        name="password"
        rules={[{required:true, message:"enter your age"},
          { min: 6, message: "Password must be at least 6 characters" }

        ]}
        >
          <Input
          placeholder='enetr your age'/>
          


        </Form.Item>
        <Form.Item
        label="city"
        name="city"
        rules={[{required:true, message:"enter your city"}]}
        >
          <Input
          placeholder='enetr your city'/>
          


        </Form.Item>
        <Form.Item
        label="email"
        name="email"
        rules={[{required:true, message:"enter your email"}]}
        >
          <Input
          placeholder='enetr your email'/>
          


        </Form.Item>
        <Form.Item
        label="number"
        name="number"
        rules={[{required:true, message:"enter your number"}]}
        >
          <Input
          placeholder='enetr your number'/>
          


        </Form.Item>
        <Button type='primary'htmlType='submit' className='w-full rounded-md  shadow-md'>Login</Button>
      </Form>
      </div>
      </div>
       </div>
       
         </>
      
      
     


    
  )
}

export default Regi