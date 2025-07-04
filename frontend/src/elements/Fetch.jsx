import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const Fetch = () => {
  const [data, setData] = useState([]);     
  const [loading, setLoading] = useState(false);
 

  useEffect(()=>{
    setLoading(true)
     axios.get('https://jsonplaceholder.typicode.com/photos')
     .then((res)=>{
      setData(res.data);
      
      setLoading(false)
     
     })
     .catch((err)=>{console.error("api fetch failed",err);
      setLoading(false);

     })
  },[])
  
   /*"albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"*/

   const columns = [
    {
      title: "albumId",
      dataIndex: "albumId",
      key: "albumId",
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "userId",
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
    
    <h1 >Fetching Data from API</h1>

    <Table
      dataSource={data}
      columns={columns}
      loading={loading}
      rowKey="id"
      bordered
    />
  
    
      </>
   
  );
};

export default Fetch;
