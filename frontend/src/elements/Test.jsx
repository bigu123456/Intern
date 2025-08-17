import React from "react";
import { Table } from "antd";

const Test = () => {
 
  const genderColumns = (title) => [
    {
      title: "M",
      dataIndex: `${title}_M`,
      key: `${title}_M`,
      align: "center",
    },
    {
      title: "F",
      dataIndex: `${title}_F`,
      key: `${title}_F`,
      align: "center",
    },
  ];

  const columns = [
    {
      title: "S.N.",
      dataIndex: "sn",
      key: "sn",
      align: "center",
      fixed: "left",
    },
    {
      title: "Visit Date",
      dataIndex: "visitDate",
      key: "visitDate",
      align: "center",
    },
    {
      title: "<28 Days",
      children: genderColumns("under28Days"),
    },
    {
      title: "28D-1Yr",
      children: genderColumns("28D_1Yr"),
    },
    {
      title: "2-4Yrs",
      children: genderColumns("2_4Yrs"),
    },
    {
      title: "5-14Yrs",
      children: genderColumns("5_14Yrs"),
    },
    {
      title: "15-19Yrs",
      children: genderColumns("15_19Yrs"),
    },
    {
      title: "20-29Yrs",
      children: genderColumns("20_29Yrs"),
    },
    {
      title: "30-39Yrs",
      children: genderColumns("30_39Yrs"),
    },
    {
      title: "40-49Yrs",
      children: genderColumns("40_49Yrs"),
    },
    {
      title: "50-59Yrs",
      children: genderColumns("50_59Yrs"),
    },
    {
      title: "60+Yrs",
      children: genderColumns("60plus"),
    },
    {
      title: "Total",
      children: genderColumns("total"),
    },
    {
      title: "Grand Total",
      children: genderColumns("grandTotal"),
    },
  ];

 
  const data = [];

  return (
    <>
    <div className="px-10 py-10">

   
   
  

   
    <Table
      columns={columns}
      dataSource={data}
      bordered
      scroll={{ x: true }}
      pagination={true}
      locale={{ emptyText: "No data! Looks like there is no data." }}
    />
     </div>
    
      </>
  );
};

export default Test;
