import React, { useState } from "react";
import { Table, Input } from "antd";

const Purchase = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const columns = [
    { title: "Item Name", dataIndex: "itemName", key: "itemName" },
    { title: "GR No", dataIndex: "grNo", key: "grNo" },
    { title: "Bill No", dataIndex: "billNo", key: "billNo" },
    { title: "Bill Date", dataIndex: "billDate", key: "billDate" },
    { title: "Item Code", dataIndex: "itemCode", key: "itemCode" },
    { title: "Batch No", dataIndex: "batchNo", key: "batchNo" },
    { title: "Exp. Date", dataIndex: "expDate", key: "expDate" },
    { title: "UOM", dataIndex: "uom", key: "uom" },
    { title: "Qty", dataIndex: "qty", key: "qty" },
    { title: "Return Qty", dataIndex: "returnQty", key: "returnQty" },
    { title: "Rate", dataIndex: "rate", key: "rate" },
    { title: "Amount", dataIndex: "amount", key: "amount" },
    { title: "Dis(%)", dataIndex: "discount", key: "discount" },
    { title: "CC", dataIndex: "cc", key: "cc" },
    { title: "VAT", dataIndex: "vat", key: "vat" },
    { title: "Net Amt", dataIndex: "netAmt", key: "netAmt" },
    { title: "Action", key: "action" },
  ];

  return (
    <>
      <div className="flex flex-wrap gap-3 bg-white rounded-lg shadow-md ">
        {columns.map((col, index) => {
          if (col.title === "Item Name") {
            return (
              <div
                key={index}
                className="bg-gray-200 px-2 py-1 rounded"
                style={{ minWidth: "140px", textAlign: "center" }}
              >
                <Input
                  size="small"
                  placeholder="Item Name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="bg-gray-200 text-xs text-gray-700 px-2 py-1 rounded"
                style={{ minWidth: "80px", textAlign: "center" }}
              >
                {col.title}
              </div>
            );
          }
        })}
      </div>

      <Table columns={columns} bordered pagination={true} />
    </>
  );
};

export default Purchase;
