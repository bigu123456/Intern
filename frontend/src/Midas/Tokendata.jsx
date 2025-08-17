import { ListInventory } from '../Services/inventoryService';
import { Input, Table } from 'antd';
import { useState } from 'react';
import './Tokendata.css'; 

const Tokendata = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const { data } = ListInventory();
  const dataList = data?.data || data || [];

  const filteredData = dataList.filter(item =>
    item.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id'  },
    { title: 'Name', dataIndex: 'name', key: 'name' },
  ];

  return (
    <>
<div className="flex flex-col justify-center items-center px-5 py-5 bg-gray-50 shadow-md">

      <p>Government od Nepal</p>
      <p>ministry of Health and Population</p>
      <p>Department of health services</p>
      <p>Health managaemnt department system</p>
      <p>Public  hospital monthly reporting form</p>


    </div>
   

  
      <div className='  px-10 py-10 '>
        <Input
          className='py-3 w-32'
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
       <div className='flex space-x-11 gap-10 px-5 py-5'>
      <Table
        className="custom-table"
        columns={columns} 
        dataSource={filteredData}
        
        rowKey="id"
      />
     
      <Table
        className="custom-table"
        columns={columns}
        dataSource={filteredData}
        rowKey="id"
       
           
      />
        </div>
    </>
  );
};

export default Tokendata;
