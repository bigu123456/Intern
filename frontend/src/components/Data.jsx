import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, HomeOutlined, NumberOutlined} from '@ant-design/icons';


const Data = () => {
  const onFinish = (values) => {
    console.log('submitted', values);
  };

  return (
    <div className="min-h-screen p-2  px-10">
      <div className="grid grid-cols-3 gap-4">
        {[...Array(15)].map((_, index) => (
         
          <div
            key={index}
            className="bg-yellow-300 rounded-lg p-5 flex justify-center items-center"
            style={{ minHeight: '150px' }}
          >
            {/* Inner white box with form */}
            <div className="bg-yellow-500 rounded-lg border border-gray-300 shadow-md p-6 w-full max-w-xs">
              <Form
                onFinish={onFinish}
                layout="vertical"
              >
                 <Form.Item  
    label="username"
    name="username"
    rules={[{required:true, message:"entr valid username"}]}
    >
      <Input
      placeholder='enter your username'
      prefix={< UserOutlined/>}
      />

    </Form.Item>
    <Form.Item  
    label="password"
    name="password"
    rules={[{required:true, message:"entr valid password"}]}
    >
      <Input.Password
      placeholder='enter your password'
      prefix={< LockOutlined/>}
      />

    </Form.Item>
    <Form.Item  
    label="age"
    name="age"
    rules={[{required:true, message:"entr valid age"}]}
    >
      <Input
      placeholder='enter your age'
      prefix={< NumberOutlined/>}
      className='w-full'
      />

    </Form.Item>
    <Form.Item  
    label="city"
    name="city"
    rules={[{required:true, message:"entr valid city"}]}
    >
      <Input
      placeholder='enter your city'
      prefix={<  HomeOutlined/>}
      />

    </Form.Item>
                <Button type="primary" htmlType="submit" className="w-full">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Data;
