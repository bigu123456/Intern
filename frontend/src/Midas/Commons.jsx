import React from "react";
import { Table } from "antd";
import { Common } from "../Services/inventoryService";
import "./Labstyle.css";

const Commons = () => {
  const { data, isLoading } = Common();
  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (!data?.data) return <p>No data available</p>;

 
 const tableData = data.data.flatMap((chapter, ci) =>
  chapter.diagnoses.map((diag, di) => ({
    key: `${ci}-${di}`,
    chapter_name: chapter.chapter_name,
    ...diag, 
  }))
);

 
  const columns = [
    {
      title: "Chapter",
      dataIndex: "chapter_name",
      key: "chapter_name",
    },
    {
      title: "Diagnosis Code",
      dataIndex: "diagnosis_code",
      key: "diagnosis_code",
    },
    {
      title: "Diagnosis Name",
      dataIndex: "diagnosis_name",
      key: "diagnosis_name",
    },
    {
      title: "Male",
      dataIndex: "male_count",
      key: "male_count",
    },
    {
      title: "Female",
      dataIndex: "female_count",
      key: "female_count",
    },
    {
      title: "Total",
      dataIndex: "total_count",
      key: "total_count",
    },
  ];

  return (
    <div>
      <h1>Common Emergency Diseases Report</h1>
      <Table
      className="lab-table"
        columns={columns}
        dataSource={tableData}
        pagination={false}
        bordered
      />
    </div>
  );
};

export default Commons;
