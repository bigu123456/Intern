import React from 'react'
import { useState } from 'react'


const Calculator = () => {
    const [Number1, setnumber1] = useState("");
    const [number2, setnumber2] = useState("");
    const [total, settotal] = useState("");
    const add=()=>{
        let num=Number(Number1)+Number(number2)
        settotal("the sum of two numbers is " +num)

        
    }
    const sub=()=>{
        let num=Number(Number1)-Number(number2)
        settotal("The total sub of two numbers is "  +num)

        
    }
    const multiple=()=>{
        let num=Number(Number1) *Number(number2)
        settotal("The total multiplication of two numbers is " +num)

        
    }
    const divide=()=>{
        let num=Number(Number1)/Number(number2)
        settotal("The total divided number of two numbers is "  +num)

        
    }
    const handler=(e)=>{
       e.preventDefault();
       

    }
  return (
    <>
    <h1>{total}</h1>
    <div className='flex justify-center items-center h-screen bg-yellow-400  '>
    
    <form  onSubmit={handler} className=''>
        <input value={Number1} onChange={(e)=>setnumber1(e.target.value)} placeholder='enetr number 1'></input><br></br>
        <input value={number2} onChange={(e)=>setnumber2(e.target.value)} placeholder='enetr number 1'></input><br></br>
        <button  typeof='submit' onClick={add} className='bg-blue-600 text-white border-red-800'> Add</button>
         <button  typeof='submit'onClick={sub} className=' bg-blue-600 text-white border-red-800'> sub</button>
          <button  typeof='submit' onClick={multiple} className=' bg-blue-600 text-white border-red-800'> multiple</button>
           <button  typeof='submit 'onClick={divide} className='bg-blue-600 text-white rounded-sm border-spacing-5 border-red-800'> divide</button>
    </form>
    </div>
    
    </>
   
  )
}

export default Calculator