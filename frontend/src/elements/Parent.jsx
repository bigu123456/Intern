import React from 'react'
import Child from './Child'
import { useState } from 'react'
import Students from './Students'
import Testapi from './Testapi'




const Parent = () => {
  const [filter, setfilter] = useState("")
  const [students, setstudents] = useState("")
  const [first, setfirst] = useState("")
 
  const array=[

    {
      id:1, name:"Bigyan", age:22,city:"Morang",number:9810205962,
    },
    {
      id:2, name:"Biswash", age:22,city:"kathamndu",number:9876543212
    },
    {
      id:3,name:'ujwal', age:"20", city:"Dharan",number:1234567890
    },
    {
      id:4, name:"Saroj", age:21,city:"jhapa",number:5678998765
    },
    {
      id:5, name:"Adim",age:20, city:"Biratnagar", number:9817367977
    },
    {
      id:6, name:"subash", age:30,city:"belbari", number:9810347632
    }
  ]
  const [data, setdata] = useState(array)
  const handle=(e)=>{
    const item=e.target.value
    setfilter(item)
  }
  const fil=data.filter(items=>items.name.toLowerCase().includes(filter.toLowerCase())||
  items.city.toLowerCase().includes(filter.toLowerCase())||
  items.age.toString().includes(filter.toString())||
  items.number.toString().includes(filter.toString())
)

  const addperson=(value)=>{
   const newperson={
    id:data.length+1,
    ...value


   }
   setdata((prev)=>[...prev,newperson])
  }
  const deleteperson=(ID)=>
    {
      const del=data.filter(user => user.id !== ID)
    setdata(del)
   }
   const items=(value)=>{
    console.log("data come from child component", value)
    setstudents(value)
   }
   const gaindata=(datas)=>{
    setfirst(datas)
    console.log("data from testapi", datas)
   }

  return (
    <>
    <div>
   <h1> learning props delete and filter and add </h1>

     <Testapi  num={gaindata}/>
      <h3>{first}</h3>
    </div>
 
<div className="relative w-full h-20"> 
  <div className="absolute top-4 right-4">
    <input
      type="text"
      value={filter}
      onChange={handle}
      className="rounded-xl px-4 py-2 border border-gray-300 shadow-md"
      placeholder="Search..."
    />
  </div>
</div>

   
    <Child name={fil} pass={addperson} remove={deleteperson} />
    <Students senddata={items}/> <br></br>
   

    <h3>{students}</h3>
    
    </>
  )
}

export default Parent
