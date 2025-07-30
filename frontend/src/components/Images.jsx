import React from 'react'
import{Input,Button} from"antd"
import { useState } from 'react'



const Images = () => {
    const [pictures, setpictures] = useState("")
    const [first, setfirst] = useState("")
    const handlefile=(e)=>{
        const file=e.target.files[0]
        if(file){
            const img=URL.createObjectURL(file)
            setpictures(img)
            setfirst(file)
           
        }
    }

    
    const save=()=>{

       
       
        console.log(first)

    }
   
  return (
    <>
    <div className=''>

        <Input
        type='file'
        onChange={handlefile}
        className='w-40'
        />
    </div>
    <div>
        <img src={pictures}alt='pictures' className='w-32'></img>
        
    </div>
    <Button type='primary'onClick={save}>submit</Button>
    

    </>
  )
}

export default Images