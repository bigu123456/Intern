
//parents for from 


import Register from "./Register";
import { useState } from "react";
import Demo from "./Demo.tsx";


const Login = () => {
  const [information, setinformation] = useState([])

   
    const onFinish=(values)=>{
      const entry={...values, id:Date.now()}
      setinformation([...information, entry]);
        console.log("values",values)

    }
    
    
  return (
    <>
    <h1> parent for form</h1>
    <Register data={onFinish}  details={information}/>
    <Demo information={information} setinformation={setinformation}/>

    </>
  )
}

export default Login