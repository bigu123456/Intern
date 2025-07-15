import React from 'react'
import ChildDemo from './ChildDemo.tsx'
import { useState } from 'react'


const Parents = () => {
    const [text, settext]=useState("hello")
      console.log("numbers", text)
  return (
    <>
     <ChildDemo text={text} settext={settext}/>
    </>
  )
}

export default Parents
