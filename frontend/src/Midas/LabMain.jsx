import React from 'react'
import SetupModalWrapper from './SetupModal'
import Lab from './Lab'

const LabMain = () => {
  return (
  <>
  <div className='flex justify-end px-5 py-5'>
     <SetupModalWrapper/>
   

  </div>

   
  <div className='flex justify-center'>
    <h1>Laboratory Services</h1>
    </div>

  
 
   

 
 
  <Lab/>
 
  </>
  )
}

export default LabMain