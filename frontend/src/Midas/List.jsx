import React from 'react'
import Header from '../elements/Header'

import { Button } from 'antd'

const List = () => {
  
  return (
    <>
      <Header />
      <div className="flex py-10 px-10 gap-10">
        <div>
          <Button
            type="primary"
            htmlType="submit"
          
          >
            Purchase return list
          </Button>
        </div>

        <div>
          <Button
            type="primary"
            htmlType="submit"
       
          >
            Purchase return
          </Button>
        </div>
      </div>
      <p>purchase return tab list</p>
    </>
  )
}

export default List
