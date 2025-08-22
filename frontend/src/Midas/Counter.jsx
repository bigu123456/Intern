import React from 'react'
import { ListInventory } from '../Services/inventoryService'

const Counter = () => {
    const{data}=ListInventory()
    console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default Counter
