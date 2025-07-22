
//parents for from 


import Register from "./Register";
import { useState } from "react";
import Demo from "./Demo.tsx";
import {Form} from "antd"


const Login = () => {
  const [information, setinformation] = useState([])
    const [editingId, setEditingId] = useState(null);
     const [form] = Form.useForm();

   
  const onFinish = (values) => {
  if (editingId) {
     
    setinformation(prev =>
      prev.map(item =>
        item.id === editingId ? { ...item, ...values } : item
      )
    );
    setEditingId(null);
  } else {
    
    const entry = { ...values, id: Date.now() };
    setinformation([...information, entry]);
  }

  form.resetFields();
};

     const handleDelete = (id) => {
    setinformation(prevItems => prevItems.filter(item => item.id !== id));

  
  };
    const handleEdit = (record) => {
    form.setFieldsValue({
      name: record.name,
      age: record.age,
     
    });
    setEditingId(record.id);
  };
    
  return (
    <>
    <h1> parent for form</h1>
 <Register
  data={onFinish}
  details={information}
  handle={handleDelete}
  editt={handleEdit}
  form={form}
  editingId={editingId}
/>

    <Demo information={information} setinformation={setinformation} />

    </>
  )
}

export default Login