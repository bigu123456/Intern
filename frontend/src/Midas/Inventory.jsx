import React from 'react'
import List from './List'
import Purchase from './Purchase'
import Buttonn from './Buttonn'
import { Form } from 'antd'
import Header from '../elements/Header'
import Searc from './Searc'



const Inventory = () => {
  return (
   <>
   <div>
    <Header/>
    <Form>
<Buttonn/>
<div className='bg-gray-100 px-3 rounded-md shadow-md'>
  <Searc/>
</div >
<div className=' bg-gray-100 rounded-md shadow-md'>
  <Purchase/>
</div>
<List/>
  




    </Form>

   </div>
   </>
  )
}

export default Inventory