import React from "react";
import { Select } from "antd";

const { Option } = Select;

const Searchh = () => {
  return (
    <>
      <div className="px-10 flex items-center gap-2">
        <h1 className="text-base font-semibold">Purchase Return List</h1>
      </div>

      <div className="flex gap-8 px-12 py-10">
        <div>
          <p>Fiscal year</p>
          <Select
            showSearch
            placeholder="Select store"
            className="w-96"
            allowClear
          >
            <Option value="2023">2023</Option>
            <Option value="2024">2024</Option>
            <Option value="2025">2025</Option>
          </Select>
        </div>
        <div>
          <p>Supplier</p>
          <Select
            showSearch
            placeholder="Select supplier"
            className="w-96"
            allowClear
          >
            <Option value="abc">ABC Supplier</Option>
            <Option value="xyz">XYZ Supplier</Option>
          </Select>
        </div>
      </div>
    </>
  );
};

export default Searchh;
