import React, { useState } from "react";

import "./Model.css";
import {
  Modal,
  Button,
  Form,
  Select,
  Input,
  Checkbox,
  Row,
  Col,
  Table,
  Popconfirm,
 
  InputNumber
} from "antd";
import { DeleteOutlined, EditOutlined,SettingOutlined } from "@ant-design/icons";
import { Dropdown, TestNames } from "../Services/inventoryService";

const { Option } = Select;

const SetupModalWrapper = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);

  return (
    <>
      <Button type="primary" onClick={showModal} >
       <SettingOutlined/>  Setup 
      </Button>

      <Modal
        title="Setup Modal"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={1000}
      >
        <SetupModal onClose={handleCancel} />
      </Modal>
    </>
  );
};

const SetupModal = () => {
  const { data: testNames } = TestNames();
  const { data: departments } = Dropdown();

  const testNamesArray = testNames?.data || [];
  const departmentsArray = departments?.data || [];

  const [form] = Form.useForm();
  const [tableData, setTableData] = useState([]);
  const [editingKey, setEditingKey] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFinish = (values) => {
  
    if (editingKey) {
      const updatedData = tableData.map((item) =>
        item.key === editingKey
          ? {
              ...item,
              department:
                departmentsArray.find((d) => d.id === values.department)?.name ||
                "",
              test:
                testNamesArray.find((t) => t.id === values.testName)?.name || "",
              priority: values.priority,
              isPositive: values.isPositive,
            }
          : item
      );
      setTableData(updatedData);
      setEditingKey(null);
    } else {
      const newData = {
        key: Date.now(),
        department:
          departmentsArray.find((d) => d.id === values.department)?.name || "",
        test: testNamesArray.find((t) => t.id === values.testName)?.name || "",
        priority: values.priority,
        isPositive: values.isPositive,
      };
      setTableData([...tableData, newData]);
    }
    form.resetFields();
  };

  const handleDelete = (key) => {
    setTableData(tableData.filter((item) => item.key !== key));
  };

  const handleEdit = (record) => {
    form.setFieldsValue({
      department: departmentsArray.find((d) => d.name === record.department)?.id,
      testName: testNamesArray.find((t) => t.name === record.test)?.id,
      priority: record.priority,
      isPositive: record.isPositive,
    });
    setEditingKey(record.key);
  };

  const filteredData = tableData.filter(
    (item) =>
      item.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.test.toLowerCase().includes(searchTerm.toLowerCase()))
     

  const columns = [
    {
      title: 'S.N.',
      dataIndex: 'sn',
      key: 'sn',
      render: (_, __, index) => index + 1,
      width: 60,
    },
    { title: "Department", dataIndex: "department", key: "department" },
    { title: "Test", dataIndex: "test", key: "test" },
    { title: "Priority", dataIndex: "priority", key: "priority" },
    {
      title: "Is Positive Count",dataIndex: "isPositive",key: "isPositive",
      render: (value) => <Checkbox checked={value} disabled />,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div >
        

         
          <EditOutlined
            style={{ color: "#1890ff", cursor: "pointer" }}
            onClick={() => handleEdit(record)}
          />
          <Popconfirm
            title="Are you sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <DeleteOutlined style={{ color: "red", cursor: "pointer" }} />
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <>
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Row gutter={16} align="middle">
          <Col>
            <Form.Item
              name="department"
              label="Department"
              rules={[{ required: true, message: "Please select a department" }]}
            >
              <Select placeholder="Department Select" style={{ width: 200 }}>
                {departmentsArray.map((item) => (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col>
            <Form.Item
              name="testName"
              label="Test"
              rules={[{ required: true, message: "Please select a test" }]}
            >
              <Select placeholder="Test Select" style={{ width: 200 }}>
                {testNamesArray.map((item) => (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col>
            <Form.Item
              name="priority"
              label="Priority"
              rules={[{ required: true, message: "Please enter number" }]}
            >
              <InputNumber placeholder="Priority" style={{ width: 150 }} />
            </Form.Item>
          </Col>

          <Col>
            <Form.Item
            name="isPositive"
            valuePropName="checked"
            tyle={{ marginTop: 50 }}
>
  <Checkbox>Is Positive Count</Checkbox>
  </Form.Item>
   </Col>
    <Col>
     <Form.Item >
       <Button
        htmlType="submit"
         className="bg-green-600"
         >{editingKey ? "Update" : "Save"}
         </Button>
          </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Input
            placeholder="Search By Keyboard"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          className="w-40"
          />
        </Form.Item>
      </Form>

      <Table
        columns={columns}
        dataSource={filteredData}
        locale={{ emptyText: "No data available" }}
        
         rowClassName={() => "black-row"}
      />
    </>
  );
};

export default SetupModalWrapper;
