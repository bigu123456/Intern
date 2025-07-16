
import React from 'react'
import { useState } from 'react'
import{Button} from"antd"
import TypeDemo from './TypeDemo.tsx'
type  information={
    city:string
    address:string
  }

const Typee: React.FC = () => {
  const [name, namee] = useState<string>("Bigyan")
  const [age, setage] = useState<number>(20)
  const [first, setfirst] = useState<information>(
    {
    city:"pokhara",
    address:"kathmandu"
  }
  );
 
  

  const person=()=>{
    const per="biswash"
    namee(per);
   
  }
  const data=()=>{
    const dat=22;
    setage(dat)
  }
  const update=()=>{
    setfirst({
    city:"London",
    address:"Barcelona"
  })}
 
 
  return (
    <>
    <h1>{name}</h1>
   <h1>{age}</h1>
   <h1>{first.city}</h1>
   <h1>{first.address}</h1>
   <div className='flex space-x-4'>
<Button type='primary' onClick={person} className='p-4'>updatename</Button><br></br>
   <Button type='primary' onClick={data}>updateage</Button>
   <Button type='primary' onClick={update}>updateinformation</Button>
   
   </div>
<TypeDemo Bigyan={name} namee={namee} />

   

    </>
    

   
  )
}

export default Typee