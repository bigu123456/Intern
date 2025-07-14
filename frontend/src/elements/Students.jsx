import { Button } from 'antd'
import React from 'react'

const Students = (props) => {
  const{senddata}=props

    const data=[1,2,3,4,5,6,7]
    const hanldedata=()=>{
     
        senddata(data)
        
    }

  return (
    <>
    <h1> learning props</h1>
    <Button type='primary' onClick={hanldedata}>senddatatoparent</Button>
    </>
  )
}

export default Students
