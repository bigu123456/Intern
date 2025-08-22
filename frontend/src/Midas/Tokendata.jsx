import { ListInventory } from '../Services/inventoryService';
import {  Table } from 'antd';

import './Tokendata.css'; 

const Tokendata = () => {


  const { data } = ListInventory();
  const dataList = data?.data || data || [];
  console.log(dataList)

  

 

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
   

  
      
       <div className='flex space-x-11 gap-10 px-5 py-5'>
      <Table
        className="custom-table"
        columns={columns} 
        dataSource={dataList.slice(0,100)}
        
        rowKey="id"
      />
     
      <Table
        className="custom-table"
        columns={columns}
        dataSource={dataList.slice(100, 200)}
        rowKey="id"
       
           
      />
       <Table
        className="custom-table"
        columns={columns}
        dataSource={dataList.slice(200, 300)}
        rowKey="id"
       
           
      />
       <Table
        className="custom-table"
        columns={columns}
        dataSource={dataList.slice(300, 400)}
        rowKey="id"
       
           
      />
       <Table
        className="custom-table"
        columns={columns}
        dataSource={dataList.slice(400, 500)}
        rowKey="id"
       
           
      />
        </div>
    </>
  );
};

export default Tokendata;
