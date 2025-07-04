import React, { useState } from 'react';
import { Select, Radio, Button, Breadcrumb, Table } from 'antd';
import { HomeOutlined, EyeOutlined } from '@ant-design/icons';
import Sidebar from './Sidebar';  // Import Sidebar
import Header from './Header';    // Import Header

const { Option } = Select;

const ClaimManagement = () => {
  const [filters, setFilters] = useState({
    period: 'Today',
    claimType: 'OP',
    insuranceType: 'Social Security Fund',
    claimStatus: 'Both',
    docGenStatus: 'Generated',
    docUploadStatus: 'Both'
  });

  // Sample data - empty array to simulate no data scenario
  const data = []; 

  // Columns definition for AntD Table
  const columns = [
    {
      title: 'UHID',
      dataIndex: 'uhid',
      key: 'uhid',
    },
    {
      title: 'Patient Name',
      dataIndex: 'patientName',
      key: 'patientName',
    },
    {
      title: 'Scheme Type',
      dataIndex: 'schemeType',
      key: 'schemeType',
    },
    {
      title: 'Bill Date',
      dataIndex: 'billDate',
      key: 'billDate',
    },
    {
      title: 'Claim Code',
      dataIndex: 'claimCode',
      key: 'claimCode',
    },
    {
      title: 'SSF Code',
      dataIndex: 'ssfCode',
      key: 'ssfCode',
    },
    {
      title: 'Doc. Generated',
      dataIndex: 'docGenerated',
      key: 'docGenerated',
    },
    {
      title: 'Doc. Scanned',
      dataIndex: 'docScanned',
      key: 'docScanned',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button type="link" size="small">
          View
        </Button>
      ),
    },
  ];

  const handleSelectChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleRadioChange = (key, e) => {
    setFilters(prev => ({ ...prev, [key]: e.target.value }));
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content wrapper */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Main content */}
        <main className="p-6 flex-1 overflow-auto">
          {/* Breadcrumb */}
          <Breadcrumb separator="›" className="mb-6 text-gray-600">
            <Breadcrumb.Item href="/">
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item>Claim Management</Breadcrumb.Item>
            <Breadcrumb.Item>Claim Management</Breadcrumb.Item>
            <Breadcrumb.Item>
              <span className="font-medium text-gray-900">Claim Management</span>
            </Breadcrumb.Item>
          </Breadcrumb>

          {/* Header Tab */}
          <div className="mb-6">
            <Button
              type="primary"
              className="rounded-t-lg font-medium"
              style={{ padding: '0.5rem 1.5rem' }}
            >
              Claim Management
            </Button>
          </div>

          {/* Filters Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            {/* Top Row Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {/* Period Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">📅 Period</label>
                <Select
                  value={filters.period}
                  onChange={(val) => handleSelectChange('period', val)}
                  className="w-full"
                >
                  <Option value="Today">Today</Option>
                  <Option value="Yesterday">Yesterday</Option>
                  <Option value="This Week">This Week</Option>
                  <Option value="This Month">This Month</Option>
                </Select>
              </div>

              {/* Claim Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">📋 Claim Type</label>
                <Select
                  value={filters.claimType}
                  onChange={(val) => handleSelectChange('claimType', val)}
                  className="w-full"
                >
                  <Option value="OP">OP</Option>
                  <Option value="IP">IP</Option>
                  <Option value="Emergency">Emergency</Option>
                </Select>
              </div>

              {/* Insurance Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">🏥 Insurance Type</label>
                <Select
                  value={filters.insuranceType}
                  onChange={(val) => handleSelectChange('insuranceType', val)}
                  className="w-full"
                >
                  <Option value="Social Security Fund">Social Security Fund</Option>
                  <Option value="Private Insurance">Private Insurance</Option>
                  <Option value="Government Scheme">Government Scheme</Option>
                </Select>
              </div>

              {/* Preview Button */}
              <div className="flex items-end">
                <Button
                  type="primary"
                  className="w-full bg-teal-500 hover:bg-teal-600 border-teal-500"
                  icon={<EyeOutlined />}
                  size="middle"
                >
                  Preview
                </Button>
              </div>
            </div>

            {/* Radio Button Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Claim Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Claim Status:</label>
                <Radio.Group
                  onChange={(e) => handleRadioChange('claimStatus', e)}
                  value={filters.claimStatus}
                  className="space-y-2"
                >
                  <Radio value="Both">Both</Radio>
                  <Radio value="Claimed">Claimed</Radio>
                  <Radio value="Pending">Pending</Radio>
                </Radio.Group>
              </div>

              {/* Doc Gen Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Doc Gen Status:</label>
                <Radio.Group
                  onChange={(e) => handleRadioChange('docGenStatus', e)}
                  value={filters.docGenStatus}
                  className="space-y-2"
                >
                  <Radio value="Both">Both</Radio>
                  <Radio value="Generated">Generated</Radio>
                  <Radio value="Not Generated">Not Generated</Radio>
                </Radio.Group>
              </div>

              {/* Doc Upload Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Doc Upload Status:</label>
                <Radio.Group
                  onChange={(e) => handleRadioChange('docUploadStatus', e)}
                  value={filters.docUploadStatus}
                  className="space-y-2"
                >
                  <Radio value="Both">Both</Radio>
                  <Radio value="Uploaded">Uploaded</Radio>
                  <Radio value="Not Uploaded">Not Uploaded</Radio>
                </Radio.Group>
              </div>
            </div>
          </div>

          {/* Table Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <Table
              columns={columns}
              dataSource={data}
              rowKey="uhid"
              locale={{
                emptyText: (
                  <div className="text-center py-12 text-gray-500 select-none">
                    <p className="font-semibold text-lg mb-1">No Data</p>
                    <p>No data!</p>
                    <p className="mt-2 text-sm text-gray-400">Looks like there is no data.</p>
                  </div>
                ),
              }}
              pagination={{ pageSize: 15 }}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ClaimManagement;
