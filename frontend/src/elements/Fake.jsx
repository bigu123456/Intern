import React, { useState } from 'react';
import { Table, Button, Popconfirm, message, Modal, Input, Form } from 'antd';
import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const fetch = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return res.data;
};

const deletetodo = async (id) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return id;
};

const updatetodo = async ({ id, title }) => {
  const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    title,
  });
  return res.data;
};

const Fake = () => {
  const queryClient = useQueryClient();
  const [modal, setmodal] = useState(false);
  const [edit, setedit] = useState(null);

  const [form] = Form.useForm();

  const { data, error, isLoading } = useQuery({
    queryKey: ['todo'],
    queryFn: fetch,
  });

  const deleteMutation = useMutation({
    mutationFn: deletetodo,
    onSuccess: (id) => {
      message.success('Deleted successfully');
      queryClient.setQueryData(['todo'], (old) =>
        old ? old.filter((item) => item.id !== id) : []
      );
      setTimeout(() => {
        queryClient.invalidateQueries(['todo']);
      }, 7000);
    },
    onError: () => {
      message.error('Error deleting');
    },
  });

  const updateMutation = useMutation({
    mutationFn: updatetodo,
    onSuccess: (updatedTodo) => {
      message.success('Updated successfully');
      queryClient.setQueryData(['todo'], (old) =>
        old
          ? old.map((item) =>
              item.id === updatedTodo.id ? { ...item, ...updatedTodo } : item
            )
          : []
      );
      setmodal(false);
      setedit(null);
      form.resetFields();
    },
    onError: () => {
      message.error('Error updating');
    },
  });

  const showEditModal = (record) => {
    setedit(record);
    setmodal(true);
    form.setFieldsValue({ title: record.title });
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        updateMutation.mutate({ id: edit.id, title: values.title });
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  const handleCancel = () => {
    setmodal(false);
    setedit(null);
    form.resetFields();
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Action',
      render: (_, record) => (
        <>
          <Button onClick={() => showEditModal(record)} style={{ marginRight: 8 }}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this?"
            onConfirm={() => deleteMutation.mutate(record.id)}
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <>
      <Table dataSource={data} columns={columns} rowKey="id" />

      <Modal
        title="Edit Todo"
        visible={modal}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Save"
      >
        <Form form={form} layout="vertical" name="editTodoForm" initialValues={{ title: '' }}>
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please input the title!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Fake;
