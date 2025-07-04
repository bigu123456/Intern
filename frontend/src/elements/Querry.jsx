import React from 'react';
import { Table } from 'antd';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const Querry = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['photos'],
    queryFn:async () =>{
      const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
    return res.data;}
  });
  console.log(data);
  

  const columns = [
    {
      title: "albumId",
      dataIndex: "albumId",
      key: "albumId",
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",  
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "url",
      dataIndex: "url",
      key: "url",
      
    },
    {
      title: "thumbnailUrl",
      dataIndex: "thumbnailUrl",
      key: "thumbnailUrl",
      
    },
  ];

   

  return (
    <>
      <h1>Photos Table</h1>
     <p>Error: {error ? error.message : null}</p>


      <Table
        dataSource={data}
        columns={columns}
        loading={isLoading}
        rowKey="id"
        bordered
      />
    </>
  );
};

export default Querry;
