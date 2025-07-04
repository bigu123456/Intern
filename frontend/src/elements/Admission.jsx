import React from 'react';
import Sidebar from './Sidebar'; 
import Header from './Header';
import {
  Input,
  Select,
  Switch,
  Button,
  Typography,
  Space,
} from 'antd';
import {  ReloadOutlined, SaveOutlined, UserOutlined, PlusOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Title, Text } = Typography;

const Admission = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r shadow-sm">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <Title level={4} className="!mb-0">Patient Admission</Title>
              <Text type="secondary">Admission and Discharge &gt; Admission &gt; Admission</Text>
            </div>

            <Space>
              <Text className="text-gray-500">System Date/Time: 2082-03-15 | 11:43:20</Text>
              <Button icon={<ReloadOutlined />}>Clear</Button>
              <Button icon={<SaveOutlined />} type="primary" disabled>
                Save & Continue
              </Button>
            </Space>
          </div>

          {/* Search Bar */}
          <div className="flex gap-4 mb-6">
            <Input prefix={<UserOutlined />} placeholder="Patient Name" className="flex-1" />
            <Input placeholder="UHID" className="flex-1" />
            <Input placeholder="Age" className="flex-1" />
            <Input placeholder="Ward Visits" className="flex-1" />
            <Button type="primary" className="bg-teal-600 hover:bg-teal-700">Search</Button>
          </div>

          {/* Admission Info */}
          <div className="bg-white p-4 rounded border mb-6">
            <div className="flex justify-between items-center mb-3">
              <Title level={5} className="!mb-0">Admission Info</Title>
              <div className="flex items-center gap-2">
                <Text>Manual Admission Date Selection</Text>
                <Switch />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select defaultValue="GEN">
                <Option value="GEN">GEN</Option>
              </Select>
              <Input placeholder="Select Patient From" />
              <Select placeholder="Select Ref. Department">
                <Option value="ref1">Ref. Dept 1</Option>
              </Select>
              <Select placeholder="Select Under Department" className="border-red-500">
                <Option value="under1">Under Dept</Option>
              </Select>
              <Select placeholder="Select Consultant">
                <Option value="doc1">Dr. A</Option>
              </Select>
              <Button icon={<PlusOutlined />} className="mt-1 md:mt-0">Add</Button>
            </div>
          </div>

          {/* Room Info */}
          <div className="bg-white p-4 rounded border mb-6">
            <div className="flex justify-between items-center mb-3">
              <Title level={5} className="!mb-0">Room Info</Title>
              <Button type="primary" ghost icon={<UserOutlined />}>Bed Occupancy</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select placeholder="Select Ward">
                <Option value="ward1">Ward A</Option>
              </Select>
              <Select placeholder="Select Room Type">
                <Option value="type1">Room Type 1</Option>
              </Select>
              <Select placeholder="Select Bed Number">
                <Option value="bed1">Bed 101</Option>
              </Select>
            </div>
          </div>

          {/* Guardian Info */}
          <div className="bg-white p-4 rounded border mb-6">
            <Title level={5}>Guardian And Relative Info</Title>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <Select placeholder="Select Relation">
                <Option value="father">Father</Option>
              </Select>
              <Input placeholder="Enter Guardian Name" />
              <Input placeholder="Enter Contact Number" maxLength={10} />
              <Input placeholder="Enter Email" />
              <Input placeholder="Enter Care of" />
              <div className="flex items-center col-span-full">
                <Switch className="mr-2" /> Handle With Care
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="bg-white p-4 rounded border mb-6">
            <Title level={5}>Payment Info</Title>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <Select placeholder="Select Scheme">
                <Option value="scheme1">Scheme A</Option>
              </Select>
              <Select defaultValue="IP DEPOSIT">
                <Option value="IP DEPOSIT">IP DEPOSIT</Option>
              </Select>
              <Input placeholder="Enter Deposit Amount" />
              <Input placeholder="Enter Depositor's Name" />
              <Input placeholder="Enter Contact Number" maxLength={10} />
              <Select defaultValue="CASH">
                <Option value="CASH">CASH</Option>
              </Select>
            </div>
            <div className="mt-4">
              <Input placeholder="Enter Remarks" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
