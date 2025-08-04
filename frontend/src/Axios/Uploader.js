import React from 'react'
import { useQuery } from '@tanstack/react-query'

export const Uploader = () => {
    const {data}=useQuery({
        queryFn:async()=>{
             const res=await fetch("https://jsonplaceholder.typicode.com/users")
             return res.json()
             
        }
    })
    console.table(data)
  return (
    <>
    <div>

    </div>
    </>
  )
}

export default Uploader
