import React, { useState } from 'react';
import { Button, Form, Input, Table, Popconfirm } from 'antd';

const Antd = () => {
  const [first, setfirst] = useState([]);

  const onFinish = (values) => {
    console.log("submitted", values);
    setfirst([
      ...first,
      {
        id: Date.now(),
        name: values.username,
      }
    ]);
  };

  const handleDelete = (id) => {
    setfirst(prev => prev.filter(item => item.id !== id));
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      render: (_, record) => (
        <Popconfirm
          title="Are you sure you want to delete?"
          onConfirm={() => handleDelete(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button danger>Delete</Button>
        </Popconfirm>
      )
    }
  ];

  return (
    <>
      
      <div className='flex '>

      
      <Form onFinish={onFinish}
       layout="vertical"
      className='flex felx-cols justify-center items-center bg-yellow-200 h-screen w-1/2 '>
       
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input placeholder="Enter your name"
          className='w-60' />
        </Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form>
      <div className=' flex h-screen w-full'>
<Table
        dataSource={first}
        columns={columns}
        rowKey="id"
        style={{ marginTop: 20 }}
        className=' w-full'
      />
      </div>

      
      </div>
    </>
  );
};

export default Antd;
