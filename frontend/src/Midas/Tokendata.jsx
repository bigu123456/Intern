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
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
  ];

  return (
    <>
      <div className='px-10 py-10'>
        <Input
          className='py-3 w-32'
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <Table
        className="custom-table"
        columns={columns}
        dataSource={filteredData}
        rowKey="id"
      />
      <div className='px-10 py-10'>
        <Input
          className='py-3 w-32'
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <Table
        className="custom-table"
        columns={columns}
        dataSource={filteredData}
        rowKey="id"
      />
    </>
  );
};

export default Tokendata;
