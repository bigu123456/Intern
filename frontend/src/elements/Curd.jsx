import React, { useState } from 'react';
import { Button, Input, Form, Table, Select, DatePicker } from "antd";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const { Option } = Select;

const Curd = () => {
  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const formattedDate = values.date ? values.date.format('YYYY-MM-DD') : '';

    if (editingId !== null) {
     
      setItems(prev =>
        prev.map(item =>
          item.id === editingId
            ? { ...item, text: values.input, category: values.category, date: formattedDate }
            : item
         
        )
      );
      setEditingId(null);
    } else {
    
      setItems([
        ...items,
        {
          id: Date.now(),
          text: values.input,
          category: values.category,
          date: formattedDate
        }
      ]);
    }

    form.resetFields();
  };

  const handleDelete = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));

    alert("delete?")
  };

  const handleEdit = (record) => {
    form.setFieldsValue({
      input: record.text,
      category: record.category,
      date: dayjs(record.date),
    });
    setEditingId(record.id);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Name",
      dataIndex: "text",
      key: "text"
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category"
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date"
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <>
          <EditOutlined onClick={() => handleEdit(record)} style={{ cursor: 'pointer', marginRight: 12 }} />
          <DeleteOutlined onClick={() => handleDelete(record.id)} style={{ cursor: 'pointer' }} />
        </>
      )
    }
  ];

  return (
    <>
     <h1 className='flex justify-center items-center'> curd </h1>
    <div className=''>
     

   
      <Form form={form} onFinish={onFinish} layout="inline" className='py-10 bg-white'
      >
        <Form.Item
          name="input"
          rules={[{ required: true, message: "Enter text" }]}
        >
          <Input placeholder='Enter anything' />
        </Form.Item>

        <Form.Item
          name="category"
          rules={[{ required: true, message: "Select a category" }]}
        >
          <Select placeholder="Select category" style={{ width: 150 }}>
            <Option value="Fruit">Fruit</Option>
            <Option value="Vegetable">Vegetable</Option>
            <Option value="Other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="date"
          rules={[{ required: true, message: "Select a date" }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            {editingId ? 'Update' : 'Add'}
          </Button>
        </Form.Item>
      </Form>

      <Table dataSource={items} columns={columns} rowKey="id" style={{ marginTop: 20 }} />
       </div>
    </>
  );
};

export default Curd;
