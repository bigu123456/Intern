import React from 'react';
import { Table } from 'antd';
import { Report } from "../Services/inventoryService";

const Dropdown = () => {
  const { data } = Report();
  console.log(data);

  if (!data?.data) return <p>Loading...</p>;


  const tableData = data.data.map((item, index) => ({
    key: index,
    icd_code: item.icd_code,
    disease: item.disease,
    ...item.age_groups,
  }));


  const ageGroups = [
    { key: "0_7_days", label: "0-7 Days" },
    { key: "8_28_days", label: "8-28 Days" },
    { key: "29d_1yr", label: "29 Days - <1 Yr" },
    { key: "1_4_yrs", label: "01-04 Years" },
    { key: "5_14_yrs", label: "05-14 Years" },
    { key: "15_19_yrs", label: "15-19 Years" },
    { key: "20_29_yrs", label: "20-29 Years" },
    { key: "30_39_yrs", label: "30-39 Years" },
    { key: "40_49_yrs", label: "40-49 Years" },
    { key: "50_59_yrs", label: "50-59 Years" },
    { key: "60_69_yrs", label: "60-69 Years" },
    { key: "70_plus", label: "≥ 70 Years" },
  ];

 
  const columns = [
    { title: "ICD Code", dataIndex: "icd_code", key: "icd_code" },
    { title: "Disease", dataIndex: "disease", key: "disease" },
    ...ageGroups.map(({ key, label }) => ({
      title: label,
      children: [
        {
          title: "F",
          dataIndex: `female_${key}`,
          key: `female_${key}`,
          render: (val) => val ?? 0, 
        },
        {
          title: "M",
          dataIndex: `male_${key}`,
          key: `male_${key}`,
          render: (val) => val ?? 0, 
        },
      ],
    })),
  ];

  return (
    <>
      <div className="flex justify-center bg-gray-600 text-white ">
        <h1>B.In-Patient Morbidity</h1>
      </div>
      <div className="flex ">
        <Table
          className="custom-table"
          columns={columns}
          dataSource={tableData}
         
          pagination={false}
          scroll={{ x: true }}
        />
      </div>
    </>
  );
};

export default Dropdown;
