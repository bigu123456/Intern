import React, { useState } from 'react'
import { Table, Button, Popconfirm, Modal, Form, Input,InputNumber } from 'antd'

const Child = (props) => {
  const { name, pass, remove } = props
  const [visible, setVisible] = useState(false)
  const [form] = Form.useForm()

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'city',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title:"number",
      dataIndex:"number",
      key:"number"
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Popconfirm
          title="Are you sure to delete this user?"
          onConfirm={() => remove(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button danger>Delete</Button>
        </Popconfirm>
      ),
    },
  ]

  const handleAdd = (values) => {
    pass(values)
    form.resetFields()
    setVisible(false)
  }

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={() => setVisible(true)}>
          Add User
        </Button>
      </div>

      
      <Modal
        title="Add New User"
        open={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleAdd} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Enter your name' }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item
            name="age"
            label="Age"
            rules={[{ required: true, message: 'Enter your age' }]}
          >
            <Input placeholder="Enter your age" />
          </Form.Item>

          <Form.Item
            name="city"
            label="City"
            rules={[{ required: true, message: 'Enter your city' }]}
          >
            <Input placeholder="Enter your city" />
          </Form.Item>

          <Form.Item>
            <Form.Item
            name="number"
            label="number"
            rules={[{ required: true, message: 'Enter your number' }]}
          >
            <InputNumber
             placeholder="Enter your number"
             className='w-full' />
          </Form.Item>

          <Form.Item></Form.Item>
            <Button type="primary" htmlType="submit" block>
              Add
            </Button>
          </Form.Item>
        </Form>
      </Modal>

     
      <Table dataSource={name} columns={columns} rowKey="id" />
    </>
  )
}

export default Child
