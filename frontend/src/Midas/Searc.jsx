import React from 'react'
import { Select } from 'antd'

const { Option } = Select

const Searc = () => {
  return (
    <>
      <div className="px-10 flex items-center gap-2">
        <h1 className="text-base font-semibold">Purchase Return</h1>
      </div>

      <div className="flex gap-8 px-12 py-10">
        <div>
          <p>Store</p>
          <Select
            showSearch
            placeholder="Select store"
            className="w-96"
           
           
          >
            <Option value="store1">Store 1</Option>
            <Option value="store2">Store 2</Option>
            <Option value="store3">Store 3</Option>
          </Select>
        </div>

        <div>
          <p>Supplier Name</p>
          <Select
            showSearch
            placeholder="Select supplier"
            className="w-96"
           
            
          >
            <Option value="supplier1">Supplier 1</Option>
            <Option value="supplier2">Supplier 2</Option>
            <Option value="supplier3">Supplier 3</Option>
          </Select>
        </div>
      </div>
    </>
  )
}

export default Searc
