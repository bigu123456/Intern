import React from 'react'
import{Form, Input,Button} from "antd"
import { useState } from 'react';
import {
  PlusOutlined,
  MinusOutlined,
  CloseOutlined, 
  DashOutlined   
} from "@ant-design/icons";

const Try = () => {
    const [first, setfirst] = useState("")
  const [second, setsecond] = useState("")
  const [multiply, setmultiply] = useState("")
  const [divided, setdivided] = useState(second)
    const[form]=Form.useForm()
    
      
       const add=()=>{
        const values= form.getFieldValue()
         const a=Number(values.number1)
       const b= Number(values.number2)
       setfirst(a+b)
       form.resetFields()
      

       }
        const sub=()=>{
            const  values =form.getFieldValue()
             const a=Number(values.number1)
       const b= Number(values.number2)
     setsecond(a-b)
     form.resetFields()

       }
       const multiple=()=>{
        const values=form.getFieldValue()
        const a=Number(values.number1)
    const b=Number(values.number2)  
    setmultiply(a*b)  
    form.resetFields()
   }
   const divide=()=>{
    const values=form.getFieldValue()
    const a=Number(values.number1)
    const b=Number(values.number2)
    setdivided(a/b)
    form.resetFields()

   }
        return (

    <>

     <div className='flex justify-between px-5 py-5 bg-black text-white'>
        <h1> <PlusOutlined/> Addition</h1>
        <h1> <MinusOutlined/> subtraction</h1>
        <h1> < CloseOutlined/> Divide</h1>
        <h1> <DashOutlined/> Multiply</h1>
     </div>




    <div className='flex'>

   
    <div className='flex flex-col  h-screen w-full'>
        <div className='flex justify-center items-center h-screen w-full'>

        <div className='bg-white rounded-md shadow-md px-5 py-5'>

      
    <Form form={form}>
  
        <Form.Item  
                label="Number1"
                name="number1"
                rules={[{required:true , message:"eneer  number1"}]}
                >
                  <Input
                  placeholder='enter a number1'
                  />
        
        
                </Form.Item>
                <Form.Item 
                label="number2"
                name="number2"
                rules={[{required:true , message:"eneer your number2"}]}
                >
                  <Input
                  placeholder='enter a number2'
                  />
        
        
                </Form.Item>
                <div className='flex flex-col space-x-4'>

                
                <Button type='primary' onClick={add} className='w-full' >add</Button> <br></br>
              
                 <p>Add values:{first}</p>
                
                   </div>
              </Form>
                </div>
    </div>
      </div>
      <div className='flex flex-col  h-screen w-full'>
        <div className='flex justify-center items-center h-screen w-full'>

        <div className='bg-white rounded-md shadow-md px-5 py-5'>

      
    <Form form={form}>
  
        <Form.Item  
                label="Number1"
                name="number1"
                rules={[{required:true , message:"eneer  number1"}]}
                >
                  <Input
                  placeholder='enter a number1'
                  />
        
        
                </Form.Item>
                <Form.Item 
                label="number2"
                name="number2"
                rules={[{required:true , message:"eneer your number2"}]}
                >
                  <Input
                  placeholder='enter a number2'
                  />
        
        
                </Form.Item>
                <div className='flex flex-col space-x-4'>

                
               
                <Button type='primary' onClick={sub} className='w-full' >sub</Button>
             
                  <p>sub value{second}</p>
                   </div>
              </Form>
                </div>
    </div>
      </div>
      <div className='flex flex-col h-screen w-full'>
        <div className='flex justify-center items-center h-screen w-full'>

        <div className='bg-white rounded-md shadow-md px-5 py-5'>

      
    <Form form={form}>
  
        <Form.Item  
                label="Number1"
                name="number1"
                rules={[{required:true , message:"eneer  number1"}]}
                >
                  <Input
                  placeholder='enter a number1'
                  />
        
        
                </Form.Item>
                <Form.Item 
                label="number2"
                name="number2"
                rules={[{required:true , message:"eneer your number2"}]}
                >
                  <Input
                  placeholder='enter a number2'
                  />
        
        
                </Form.Item>
                <div className='flex flex-col space-x-4'>

                
                <Button type='primary' onClick={divide} className='w-full' >add</Button> <br></br>
                <p>Divide{divided}</p>
              
               
                   </div>
              </Form>
                </div>
    </div>
      </div>
      <div className='flex flex-col  h-screen w-full'>
        <div className='flex justify-center items-center h-screen w-full'>

        <div className='bg-white rounded-md shadow-md px-5 py-5'>

      
    <Form form={form}>
  
        <Form.Item  
                label="Number1"
                name="number1"
                rules={[{required:true , message:"eneer  number1"}]}
                >
                  <Input
                  placeholder='enter a number1'
                  />
        
        
                </Form.Item>
                <Form.Item 
                label="number2"
                name="number2"
                rules={[{required:true , message:"eneer your number2"}]}
                >
                  <Input
                  placeholder='enter a number2'
                  />
        
        
                </Form.Item>
                <div className='flex flex-col space-x-4'>

                
                <Button type='primary' onClick={multiple} className='w-full' >add</Button> <br></br>
                
                 <p>multiply{multiply}</p>
                   </div>
              </Form>
                </div>
    </div>
      </div>
       </div>
       <div className='flex justify-center bg-black text-white px-5 py-5'>
        <h1> Calculator</h1>
       </div>
      
     
          
           

     
          
           

    </>
  )
  };


export default Try
