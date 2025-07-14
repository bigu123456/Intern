import { Button } from 'antd'
import React from 'react'


const Testapi = (props) => {
    const{num}=props
    const people=[1,2,3,4,5]

    const send=()=>{
        num(people)
    }
  return (
   <>
   <Button type='primary' onClick={send}>showdata</Button>
   </>
  )
}

export default Testapi