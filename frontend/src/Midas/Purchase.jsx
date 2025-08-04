import React from "react";
import { Table } from "antd";
import Calculation from "./Calculation";

const Purchase = () => {
 

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
  <div className="space-x-5">
     <Calculation/>

  </div>

   

    

      <Table columns={columns} bordered pagination={true} />
    </>
  );
};

export default Purchase;
