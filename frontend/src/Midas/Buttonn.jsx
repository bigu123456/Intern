import React from 'react'
import { ListInventory } from '../Services/inventoryService'

const Buttonn = () => {
  const {data}=ListInventory()
  console.log(data)
  return (
    <div>Buttonn</div>
  )
}

export default Buttonn