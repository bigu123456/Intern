import React, { useState } from 'react';
import { Button, Input, Form, Table } from "antd";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';



const Antd = () => {
  const [bigu, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form] = Form.useForm();



  const onFinish = (values) => {
    if (editingId) {
      setItems(prev =>
        prev.map(item =>
          item.id === editingId
            ? { ...item, text: values.person, hey: values.username }
            : item
        )
      );
      setEditingId(null);
    } else {
      setItems([
        ...bigu,
        {
          id: Date.now(),
          text: values.person,
          hey: values.username,
        },
      ]);
    }
    form.resetFields();
  };

  const handleDelete = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
    form.resetFields();
    setEditingId(null);
  };

  const handleEdit = (record) => {
    form.setFieldsValue({
      person: record.text,
      username: record.hey,
      
    } );
 
    setEditingId(record.id);
 
};
   


  const columns = [
    {
      title: "Name",
      dataIndex: "text",
      key: "name",
    },
    {
      title: "Username",
      dataIndex: "hey",
      key: "username",
    },
    {
      title: "Actions",
      render: (_, record) => (
        <>
          <EditOutlined onClick={() => handleEdit(record)} style={{ marginRight: 10 }} />
          <DeleteOutlined onClick={() => handleDelete(record.id)} />
        </>
      ),
    },
  ];

  return (
    <>
    
      <Form form={form} onFinish={onFinish} layout="inline" className="py-10 px-10">
        <Form.Item
          name="person"
          rules={[{ required: true, message: "Enter name" }]}
        >
          <Input placeholder="Enter your name" className="w-60" />
        </Form.Item>

        <Form.Item
          name="username"
          rules={[{ required: true, message: "Enter username" }]}
        >
          <Input placeholder="Enter your username" className="w-60" />
        </Form.Item>

        <Form.Item>

          <Button type="primary" htmlType="submit">
            {editingId ? "Update" : "Add"}
          </Button>
        </Form.Item>
      </Form>

      <Table
        dataSource={bigu}
        columns={columns}
        rowKey="id"
        style={{ marginTop: 20 }}
        
      />
    </>
  );
};

export default Antd;
