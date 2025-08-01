import React from 'react'
import { Form } from 'antd'
import Buttonn from '../Midas/Buttonn'
import Header from '../elements/Header'
import Tab from './Tab'
import Searchh from './Searchh'
const Returnlist = () => {
  return (
  <>
  <div>
    <Header/>
    <Form>
      <div className='bg-gray-50 rounded-md shadow-md'>
         <Buttonn/>

      </div>
       
        <div className='bg-gray-100 rounded-md shadow-md'>
          <Searchh/>
        <Tab/>

        </div>
        

    </Form>

  </div>
  </>
  )
}

export default Returnlist