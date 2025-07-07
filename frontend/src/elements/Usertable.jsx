import React from 'react';
import { Table, Button, Popconfirm, message } from 'antd';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const fetchUsers = async () => {
  const res = await axios.get('http://localhost:5000/api/users'); 
  return res.data;
};

const deleteUser = async (userId) => {
  await axios.delete(`http://localhost:5000/api/users/${userId}`); 
  return userId;
};

const Usertable = () => {
  const queryClient = useQueryClient();

  const { data: users, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  const mutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: (deletedId) => {
      message.success('User deleted successfully');

      queryClient.setQueryData(['users'], (old) =>
        old ? old.filter(user => user.id !== deletedId) : []
      );
    },
    onError: () => {
      message.error('Failed to delete user');
    },
  });

  const columns = [
    { title: 'Username', dataIndex: 'username', key: 'username' },
    { title: 'Password', dataIndex: 'password', key: 'password' }, 
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Popconfirm
          title="Are you sure to delete this user?"
          onConfirm={() => mutation.mutate(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button danger loading={mutation.isLoading}>Delete</Button>
        </Popconfirm>
      ),
    },
  ];

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users: {error.message}</p>;

  return(
    <>
    <h1> learning use mutation</h1>
    <Table rowKey="id" dataSource={users} columns={columns} pagination={{ pageSize: 20}} />
    </>
  )

   
};

export default Usertable;

/*
const user = {
  name: "Bigu",
  age: 25
};

fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json' 
  },
  body: JSON.stringify(user)  
});*/

