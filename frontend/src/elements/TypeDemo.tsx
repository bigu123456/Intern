import React from 'react'
import {Button} from "antd"

type det={
    Bigyan:string
    namee:(value:string)=>void
}

const TypeDemo:React.FC <det>= (props) => {
    const{Bigyan,namee}=props
    const change=()=>{
       const hey="hello"
       namee(hey)
        

    }
    

  return (
    <>
    <h1>{Bigyan}</h1>
    <Button type='primary' onClick={change} >childdemo</Button>
   
    
    </>
  )
}

export default TypeDemo
