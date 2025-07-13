import React from 'react'
import { useState } from 'react'
import Child from './Child';


const Parent = () => {
  const [person, setperson] = useState("");
  const array=[
    {id:1, name:"Bigyan",age:22,city:"kathmandu"},
    {id:2, name:"Biswash",age:22,city:"kathmandu"},
    {id:3, name:"ujwal",age:22,city:"kathmandu"},
    {id:4, name:"saroj",age:22,city:"kathmandu"},
    {id:5, name:"agaman",age:22,city:"kathmandu"},
    {id:6, name:"sujal",age:22,city:"kathmandu"},
    {id:7, name:"roman",age:22,city:"kathmandu"},
  ]
  const [data, setdata] = useState(array)
  
  const handlesearch=(e)=>{
    const values=e.target.value
    setperson(values);
  }
  const search=data.filter(items=>items.name.toLowerCase().includes(person.toLowerCase()))
  console.log("here is  array",search)

  const handleaddperson = (values) => {
  const newPerson = {
    id: data.length + 1,
    ...values
    
  };
  setdata((prev) => [...prev, newPerson]);
};

  return (
    <>
    <h1>learning props and filter and add </h1>
    <input
    type="text"
    value={person}
    onChange={handlesearch}
    />
  
    
    
    <Child  user={search} addperson={handleaddperson} />
    </>
  )
}

export default Parent
