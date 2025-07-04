import React, { useState } from "react";
import { Table, Button, Select, Input, Row, Col, Checkbox } from "antd";
import Sidebar from "./Sidebar"; 
import Header from "./Header";   
const { Option } = Select;


const columns = [
  {
    title: <Checkbox />, 
    dataIndex: "select",
    key: "select",
    render: () => null, 
    width: 50,
  },
  { title: "S.N.", dataIndex: "sn", key: "sn" },
  { title: "Hospital No", dataIndex: "hospitalNo", key: "hospitalNo" },
  { title: "Bill No", dataIndex: "billNo", key: "billNo" },
  { title: "Bill Date", dataIndex: "billDate", key: "billDate" },
  { title: "Patient Name", dataIndex: "patientName", key: "patientName" },
  { title: "Scheme Type", dataIndex: "schemeType", key: "schemeType" },
  { title: "Claim Code", dataIndex: "claimCode", key: "claimCode" },
  { title: "Bima No", dataIndex: "bimaNo", key: "bimaNo" },
  { title: "Visit Type", dataIndex: "visitType", key: "visitType" },
  { title: "Bill From", dataIndex: "billFrom", key: "billFrom" },
  { title: "Total Amount", dataIndex: "totalAmount", key: "totalAmount" },
  { title: "Action", dataIndex: "action", key: "action" },
];

// No data example
const data = [];

function Bookinglist() {
  const [period, setPeriod] = useState("Today");
  const [searchType, setSearchType] = useState(null);
  const [globalSearch, setGlobalSearch] = useState("");

  const handlePreview = () => {
    // Implement preview logic here
    alert(`Preview for period: ${period}, search type: ${searchType}, global search: ${globalSearch}`);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />

        <div className="p-6 bg-white">
          {/* Breadcrumb */}
          <div className="mb-4 text-sm text-gray-600">
            <span>🏠 Claim Management &gt; Booking List &gt; </span>
            <b>Booking List</b>
          </div>

         <Row align="bottom" gutter={16} style={{ marginBottom: 24 }}>
  <Col>
    <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>
      Period <span style={{ color: "red" }}>*</span>
    </div>
    <Select
      value={period}
      onChange={setPeriod}
      style={{ width: 140 }}
      size="middle"
    >
      <Option value="Today">Today</Option>
      <Option value="Yesterday">Yesterday</Option>
      <Option value="Last 7 Days">Last 7 Days</Option>
      <Option value="Last 30 Days">Last 30 Days</Option>
    </Select>
  </Col>

  <Col>
    <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>
      Search Type
    </div>
    <Select
      placeholder="Select Search Type"
      value={searchType}
      onChange={setSearchType}
      allowClear
      style={{ width: 160 }}
      size="middle"
    >
      <Option value="type1">Bill no</Option>
      <Option value="type2">Hospital no</Option>
      <Option value="type3">Claim no</Option>
    </Select>
  </Col>

   <Col>
    <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>
      Global Search
    </div>
    <Input
      placeholder="Global Search"
      value={globalSearch}
      onChange={(e) => setGlobalSearch(e.target.value)}
      style={{ width: 220 }}
      size="middle"
    />
  </Col>

  <Col>
    <Button
      type="primary"
      onClick={handlePreview}
      icon={<span role="img" aria-label="preview">👁️</span>}
      size="middle"
      style={{ height: 32, marginBottom: 4 }}
    >
      Preview
    </Button>
  </Col>
</Row>


          {/* Book All button */}
          <div className="mb-2 flex justify-end">
            <Button type="primary">Book All</Button>
          </div>

          {/* Table */}
          <Table
            columns={columns}
            dataSource={data}
            locale={{ emptyText: (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <img
                
                  alt="No data"
                  style={{ width: 80, marginBottom: 12 }}
                />
                <div>No data! Looks like there is no data.</div>
              </div>
            ) }}
            pagination={false}
            rowKey="sn"
          />
        </div>
      </div>
    </div>
  );
}

export default Bookinglist;
