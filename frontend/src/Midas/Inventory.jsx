import React from 'react'
import List from './List'

import Buttonn from './Buttonn'

import Header from '../elements/Header'
import Searc from './Searc'
import Calculation from './Calculation'



const Inventory = () => {
  return (
   <>
   <div>
    <Header/>
  
<Buttonn/>
<div className='bg-gray-100 px-3 rounded-md shadow-md'>
  <Searc/>
</div >
<div className=' bg-gray-100 rounded-md shadow-md'>
  <Calculation/>
 
</div>
<List/>
  




   

   </div>
   </>
  )
}

export default Inventory