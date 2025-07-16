import React from 'react';
import { Form, Input, Button, Table } from "antd";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const Register = ({ data, details, handle, editt, form, editingId }) => {
  const columns = [
    {
      title: "name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "age",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "city",
      dataIndex: "city",
      key: "city"
    },
    {
      title: "number",
      dataIndex: "number",
      key: "number"
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <>
          <DeleteOutlined onClick={() => handle(record.id)} style={{ cursor: 'pointer', marginRight: 12 }} />
          <EditOutlined onClick={() => editt(record)} style={{ cursor: 'pointer' }} />
        </>
      )
    }
  ];

  return (
    <>
      <div className='flex'>
        <Form form={form} onFinish={data}>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Enter your name" }]}
          >
            <Input placeholder='Enter your name' />
          </Form.Item>

          <Form.Item
            name="age"
            rules={[{ required: true, message: "Enter your age" }]}
          >
            <Input placeholder='Enter your age' />
          </Form.Item>

          <Form.Item
            name="city"
            rules={[{ required: true, message: "Enter your city" }]}
          >
            <Input placeholder='Enter your city' />
          </Form.Item>

          <Form.Item
            name="number"
            rules={[{ required: true, message: "Enter your number" }]}
          >
            <Input placeholder='Enter your number' />
          </Form.Item>

          <Button type='primary' htmlType='submit'>
            {editingId ? "Update" : "Submit"}
          </Button>
        </Form>
      </div>

      <Table dataSource={details} columns={columns} rowKey="id" />
    </>
  );
};

export default Register;
