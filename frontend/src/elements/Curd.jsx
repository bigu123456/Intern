import React, { useState } from 'react';
import { Form, Input, Button } from "antd";
import toast from 'react-hot-toast';

const Crud = () => {
  const [items, setItems] = useState([]);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    if (!values.input.trim()) {
      toast.error("Input cannot be empty");
      return;
    }
    setItems([...items, { id: Date.now(), text: values.input }]);
    form.resetFields();
    toast.success("Item added!");
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
    toast.success("Item deleted");
  };

  const handleEdit = (id) => {
    const toEdit = items.find(item => item.id === id);
    if (toEdit) {
      form.setFieldsValue({ input: toEdit.text });
      setItems(items.filter(item => item.id !== id));
      toast("Edit mode active ");
    }
  };

  return (
    <div className="min-h-screen bg-slate-500 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">CRUD with Toast</h2>
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            name="input"
            rules={[{ required: true, message: "Please enter a value" }]}
          >
            <Input placeholder="Enter text" />
          </Form.Item>
          <Button htmlType="submit" className="w-full bg-blue-500 text-white">
            Add
          </Button>
        </Form>

        <ul className="mt-4 space-y-3">
          {items.map(item => (
            <li key={item.id} className="bg-gray-100 p-2 rounded flex flex-col gap-2">
              <span>{item.text}</span>
              <div className="flex gap-2">
                <Button type="link" onClick={() => handleEdit(item.id)}>Edit</Button>
                <Button type="link" danger onClick={() => handleDelete(item.id)}>Delete</Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Crud;
