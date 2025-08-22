import React from 'react'
import { Common } from '../Services/inventoryService'

const Commons = () => {
    const{data}= Common()
    console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default Commons
