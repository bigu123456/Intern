import React from 'react'
import { useState,useEffect } from 'react'

const Test = () => {
  const [now, setnow] = useState(new Date());
 
  useEffect(()=>{
    const timer=setInterval(() => {
      setnow(new Date())
      
      
    }, 1000);
    return ()=> clearInterval(timer)
    
    
  },[])
  return (
  <>
  
<h1 className='flex justify-center items-center bg-yellow-500 h-screen'>{now.toLocaleString()}</h1>



  
  </>
  )
}

export default Test