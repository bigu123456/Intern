import React from "react";
import { Table, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const Purchase = ({ val, remove }) => {
  const columns = [
    {
      title: "SN",
      key: "sn",
      render: (_, __, index) => index + 1,
    },
    { title: "Qty", dataIndex: "qty", key: "qty" },
    { title: "Rate", dataIndex: "rate", key: "rate" },
    { title: "Dis%", dataIndex: "dis", key: "dis" },
     { title: "Vat", dataIndex: "vat", key: "Vat" },

    { title: "Discount Amount", dataIndex: "discountAmount", key: "discountAmount" },
    { title: "Total Amount", dataIndex: "totalAmount", key: "totalAmount" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button danger onClick={() => remove(record.key)}>
          <DeleteOutlined />
        </Button>
      ),
    },
  ];

  return (
    <Table
      dataSource={val}
      columns={columns}
      bordered
      pagination={false}
      rowKey="id"
    />
  );
};

export default Purchase;
