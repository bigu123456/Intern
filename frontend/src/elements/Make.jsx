import React, { useState } from 'react';
import { FaUserCog } from 'react-icons/fa';
import { DashboardOutlined } from '@ant-design/icons';



import { Select, Table } from 'antd';

const { Option } = Select;

const Make = () => {
  const [first, setFirst] = useState([]); 
   const [city, setcity] = useState([]); 

  const bigu = (value) => {
    setFirst(value);
    console.log(value);
  };
const Address = (value) => {
    setcity(value);
    console.log(value);
  };


const dataSource = first.map((name, index) => ({
  key: index,
  name,
  city: city[index]
}));

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
  },
];


  return (
    <>
    <div className='flex gap-10'>

   
      <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm w-fit">
        <div className="bg-yellow-500 p-2 rounded-md text-white text-2xl">
          <FaUserCog />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1A1A4B]">User Management</h3>
          <p className="text-gray-400 text-sm">User Setup Setup Audit Logs</p>
        </div>
      </div>
       <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm w-fit">
        <div className="bg-yellow-500 p-2 rounded-md text-white text-2xl">
          <DashboardOutlined />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1A1A4B]">Dashboard</h3>
          <p className="text-gray-400 text-sm">User Setup Setup Audit Logs</p>
        </div>
        
      </div>
      <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm w-fit">
        <div className="bg-yellow-500 p-2 rounded-md text-white text-2xl">
          <FaUserCog />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1A1A4B]">User Management</h3>
          <p className="text-gray-400 text-sm">User Setup Setup Audit Logs</p>
        </div>
      </div>
      <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm w-fit">
        <div className="bg-yellow-500 p-2 rounded-md text-white text-2xl">
          <FaUserCog />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1A1A4B]">User Management</h3>
          <p className="text-gray-400 text-sm">User Setup Setup Audit Logs</p>
        </div>
      </div>
      
      
       </div>

      <Select
        placeholder="Select here"
        onChange={bigu}
        value={first}
        mode="multiple"  
        style={{ width: 300, marginTop: 16 }}
      >
        <Option  value="Bigyan">Bigyan</Option>
        <Option value="Uttam">Uttam</Option>
        <Option value="yushan">yushan</Option>
        <Option value="Biswash">biswash</Option>
        <Option value="Ujwal">ujwal</Option>
        <Option value="Ushan">ushan</Option>
        <Option value="sujal">sujal</Option>
        <Option value="saroj">saroj</Option>
        <Option value="Adim">adim</Option>
        <Option value="Roman">roman</Option>
        <Option value="Rijan">Rijan</Option>
        <Option value="Subash">Subash</Option>
      </Select>
       <Select
        placeholder="Select here"
        onChange={Address}
        value={city}
        mode="multiple"  
        style={{ width: 300, marginTop: 16 }}
      >
        <Option  value="belbari">Belbari</Option>
        <Option value="pokhara">pokhara</Option>
        <Option value="jhapa">jhapa</Option>
        <Option value="japan">japan</Option>
        <Option value="comodia">combodial</Option>
        <Option value="Uk">ushan</Option>
        <Option value="Kathmandu">sujal</Option>
        <Option value="Munal chok">saroj</Option>
        <Option value="combodia">adim</Option>
        <Option value="combodia">roman</Option>
        <Option value="USA">Rijan</Option>
        <Option value="Munal chok">Subash</Option>
      </Select>

      <Table dataSource={dataSource} columns={columns} rowKey="key" style={{ marginTop: 16 }} />
    </>
  );
};

export default Make;
