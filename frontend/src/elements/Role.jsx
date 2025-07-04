import React, { useState } from 'react';
import 'antd/dist/reset.css';
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  PlusOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import {
  Table,
  Input,
  Button,
  Select,
  Typography,
  Space,
  Modal,
  Form,
} from 'antd';

import Header from './Header';
import Sidebar from './Sidebar';

const { Text } = Typography;

function App() {
  const [form] = Form.useForm();
  const [searchTerm, setSearchTerm] = useState('');
  const [showEntriesCount, setShowEntriesCount] = useState(15);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [editingRoleId, setEditingRoleId] = useState(null);

  const [roles, setRoles] = useState([
    { id: 1, name: 'Pharmacy cashier' },
    { id: 2, name: '1750144989536 role' },
    { id: 3, name: 'LAB SUPERADMIN' },
    { id: 4, name: 'Account' },
    { id: 5, name: 'Test-02' },
    { id: 6, name: 'Test-01' },
    { id: 7, name: 'Test01' },
    { id: 8, name: 'Test' },
    { id: 9, name: 'Admin' },
    { id: 10, name: 'Agent' },
    { id: 11, name: 'Inventory' },
    { id: 12, name: 'Lab' },
    { id: 13, name: 'Pathouser' },
    { id: 14, name: 'SuperAdmin' },
  ]);

  const filteredRoles = roles.filter((role) =>
    role.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddClick = () => {
    setEditingRoleId(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleEdit = (role) => {
    form.setFieldsValue({ name: role.name });
    setEditingRoleId(role.id);
    setIsModalVisible(true);
  };

  const handleDelete = (role) => {
   
        setRoles((prev) => prev.filter((r) => r.id !== role.id));
        alert("are you sure want to delete")
      }
  

  const handleView = (role) => {
    Modal.info({
      title: 'Role Details',
      content: (
        <div style={{ fontSize: 14 }}>
          <p><strong>ID:</strong> {role.id}</p>
          <p><strong>Name:</strong> {role.name}</p>
        </div>
      ),
      okText: 'Close',
      centered: true,
      width: 300,
    });
  };

  const onFinish = (values) => {
    if (editingRoleId) {
      // Update
      setRoles((prev) =>
        prev.map((role) =>
          role.id === editingRoleId ? { ...role, name: values.name } : role
        )
      );
    } else {
      // Add
      const newRole = {
        id: Date.now(),
        name: values.name.trim(),
      };
      setRoles((prev) => [...prev, newRole]);
    }
    setIsModalVisible(false);
    form.resetFields();
    setEditingRoleId(null);
  };

  const columns = [
    {
      title: 'S.N.',
      dataIndex: 'sn',
      key: 'sn',
      render: (_, __, index) => index + 1,
      width: 60,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
     
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 120,
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<EyeOutlined />}
            onClick={() => handleView(record)}
            aria-label={`View role ${record.name}`}
          />
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
            aria-label={`Edit role ${record.name}`}
          />
          <Button
            type="primary"
            icon={<DeleteOutlined />}
            danger
            onClick={() => handleDelete(record)}
            aria-label={`Delete role ${record.name}`}
          />
        </Space>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex flex-1">
        <div className={`${sidebarOpen ? 'w-64' : 'w-16'} transition-all duration-300`}>
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>

        <main className="flex-1 p-6 transition-all duration-300">
          <div className="mb-4">
            <Button
              icon={sidebarOpen ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="mb-2 border-none shadow"
            />
          </div>

          <div className="w-full bg-white rounded-lg shadow-sm border border-teal-500">
            <div className="p-4 border-b border-teal-500">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <Space size="middle" align="center" wrap>
                  <Input
                    prefix={<SearchOutlined />}
                    placeholder="Search Table"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    allowClear
                    size="middle"
                    className="w-48"
                  />
                  <Button
                    type="primary"
                    size="middle"
                    className="bg-teal-600 hover:bg-teal-700 border-teal-600"
                  >
                    Search
                  </Button>
                </Space>

                <Space size="middle" align="center" wrap>
                  <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    size="middle"
                    className="bg-teal-600 hover:bg-teal-700 border-teal-600"
                    onClick={handleAddClick}
                  >
                    Add
                  </Button>

                  <Space size="small" align="center">
                    <Text>Show</Text>
                    <Select
                      size="middle"
                      value={showEntriesCount}
                      onChange={(value) => setShowEntriesCount(value)}
                      className="w-20"
                      options={[
                        { value: 10, label: '10' },
                        { value: 15, label: '15' },
                        { value: 25, label: '25' },
                        { value: 50, label: '50' },
                      ]}
                    />
                  </Space>
                </Space>
              </div>
            </div>

            <div className="border-t border-teal-500">
              <Table
                columns={columns}
                dataSource={filteredRoles.slice(0, showEntriesCount).map((role) => ({
                  ...role,
                  key: role.id,
                }))}
                pagination={false}
                rowClassName="hover:bg-gray-50 transition-colors duration-150"
                className="custom-table max-w-full"
                size="middle"
              />
            </div>

            <div className="px-6 py-3 border-t border-teal-500 bg-gray-50 flex justify-between items-center">
              <Text type="secondary" className="text-sm">
                Showing {Math.min(filteredRoles.length, showEntriesCount)} of {filteredRoles.length} entries
              </Text>
              <Space size="small">
                <Button size="small" disabled>
                  Previous
                </Button>
                <Button
                  size="small"
                  type="primary"
                  className="bg-teal-600 hover:bg-teal-700 border-teal-600"
                >
                  1
                </Button>
                <Button size="small">Next</Button>
              </Space>
            </div>
          </div>
        </main>
      </div>

      {/* Modal for Add/Edit Role */}
      <Modal
        title={
          <span className="text-lg font-semibold">
            {editingRoleId ? 'Edit Role' : 'Add Role'}
          </span>
        }
        open={isModalVisible}
        onOk={() => form.submit()}
        onCancel={() => {
          setIsModalVisible(false);
          setEditingRoleId(null);
          form.resetFields();
        }}
        okText={editingRoleId ? 'Update' : 'Save'}
        cancelText="Cancel"
        okButtonProps={{
          className: 'bg-teal-600 hover:bg-teal-700 border-none',
        }}
        cancelButtonProps={{
          className: 'border-gray-300',
        }}
      >
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            name="name"
            label="Role Name"
            rules={[{ required: true, message: 'Please enter a role name' }]}
          >
            <Input placeholder="Enter role name" className="rounded" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default App;
