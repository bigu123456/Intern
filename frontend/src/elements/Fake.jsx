import React, { useState } from 'react';
import { Table, Button, Popconfirm, message, Modal, Input, Form } from 'antd';
import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// API functions
const fetch = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return res.data;
};

const deletetodo = async (id) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return id;
};

const updatetodo = async ({ id, title }) => {
  const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, { title });
  return res.data;
};

const add = async ({ title }) => {
  const res = await axios.post(`https://jsonplaceholder.typicode.com/todos`, { title });
  return res.data;
};

const Fake = () => {
  const queryClient = useQueryClient();
  const [modal, setmodal] = useState(false);
  const [edit, setedit] = useState(null);
  const [addModal, setAddModal] = useState(false);
  const [form] = Form.useForm();
  const [addForm] = Form.useForm();

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

  const addMutation = useMutation({
    mutationFn: add,
    onSuccess: (newTodo) => {
      message.success('Added successfully');
      queryClient.setQueryData(['todo'], (old) =>
        old ? [...old, { ...newTodo, id: Date.now() }] : []
      );
      setAddModal(false);
      addForm.resetFields();
    },
    onError: () => {
      message.error('Error adding');
    },
  });

  const handleEdit = () => {
    form
      .validateFields()
      .then((values) => {
        updateMutation.mutate({ id: edit.id, title: values.title });
      })
      .catch((err) => console.log(err));
  };

  const handleAdd = () => {
    addForm
      .validateFields()
      .then((values) => {
        addMutation.mutate({ title: values.title });
      })
      .catch((err) => console.log(err));
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
      key: 'action',
      render: (_, record) => (
        <>
          <Button
            onClick={() => {
              setedit(record);
              setmodal(true);
              form.setFieldsValue({ title: record.title });
            }}
            style={{ marginRight: 8 }}
          >
            Edit
          </Button>

          <Popconfirm
            title="Are you sure to delete this?"
            onConfirm={() => deleteMutation.mutate(record.id)}
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <>
      {/* Add Button on Top */}
      <Button type="primary" onClick={() => setAddModal(true)} style={{ marginBottom: 16 }}>
        Add Todo
      </Button>

      {/* Table */}
      <Table dataSource={data} columns={columns} rowKey={(row) => row.id || row.key} />

      {/* Edit Modal */}
      <Modal
        title="Edit Todo"
        open={modal}
        onOk={handleEdit}
        onCancel={() => {
          setmodal(false);
          form.resetFields();
        }}
        okText="Save"
      >
        <Form form={form} layout="vertical" initialValues={{ title: '' }}>
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please enter a title' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      {/* Add Modal */}
      <Modal
        title="Add New Todo"
        open={addModal}
        onOk={handleAdd}
        onCancel={() => {
          setAddModal(false);
          addForm.resetFields();
        }}
        okText="Add"
      >
        <Form form={addForm} layout="vertical">
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please enter a title' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Fake;
