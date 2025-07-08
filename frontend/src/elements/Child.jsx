import React from 'react';
import { Table } from 'antd';
import 'antd/dist/reset.css'; // important!




const Child = (props) => {
  console.log('props in Child:', props);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    }
  ];

  return (
    <>
      <h1>Learning props</h1>
      <Table
        dataSource={props.name}
        columns={columns}
      rowKey={(record, index) => index} 
      />
    </>
  );
}

export default Child;
