import React from "react";
import { Table, Button } from "antd";
import { EditOutlined} from '@ant-design/icons'
import { CloseCircleFilled } from "@ant-design/icons";

const Tab = () => {
  const data = [
  {
    id: 1,
    returnNo: "PD000014",
    returnDate: "2082-04-12",
    supplierBillNo: "14",
    billDate: "2082-04-12",
    supplier: "HEALTHCARE TECHNOLOGIES PVT. LTD.",
    grossAmount: 49.5,
    discountTotalAmount: 2.5,
    vat: 0,
    afterTaxOtherCharges: 2,
    netAmt: 49.5,
  },
  {
    id: 2,
    returnNo: "PD000013",
    returnDate: "2082-04-11",
    supplierBillNo: "13",
    billDate: "2082-04-11",
    supplier: "ISHANI PHARMACY",
    grossAmount: 50,
    discountTotalAmount: 5,
    vat: 0,
    afterTaxOtherCharges: 5,
    netAmt: 50,
  },
  {
    id: 3,
    returnNo: "PD000012",
    returnDate: "2082-04-11",
    supplierBillNo: "12",
    billDate: "2082-04-11",
    supplier: "PASHUPATINATH AYURVEDA",
    grossAmount: 7809.4,
    discountTotalAmount: 402.5,
    vat: 0,
    afterTaxOtherCharges: 161.9,
    netAmt: 7809.4,
  },
  {
    id: 4,
    returnNo: "PD000011",
    returnDate: "2082-04-11",
    supplierBillNo: "11",
    billDate: "2082-04-11",
    supplier: "PASHUPATINATH AYURVEDA",
    grossAmount: 38959.12,
    discountTotalAmount: 2000,
    vat: 0,
    afterTaxOtherCharges: 803.12,
    netAmt: 38959.12,
  },
  {
    id: 5,
    returnNo: "PD000010",
    returnDate: "2082-04-11",
    supplierBillNo: "10",
    billDate: "2082-04-11",
    supplier: "HEALTHCARE TECHNOLOGIES PVT. LTD.",
    grossAmount: 49.5,
    discountTotalAmount: 2.5,
    vat: 0,
    afterTaxOtherCharges: 2,
    netAmt: 49.5,
  },
  {
    id: 6,
    returnNo: "PD000009",
    returnDate: "2082-04-11",
    supplierBillNo: "9",
    billDate: "2082-04-11",
    supplier: "BEL HEALTHCARE PVT. LTD",
    grossAmount: 460,
    discountTotalAmount: 50,
    vat: 0,
    afterTaxOtherCharges: 10,
    netAmt: 460,
  },
  {
    id: 7,
    returnNo: "PD000008",
    returnDate: "2082-04-11",
    supplierBillNo: "8",
    billDate: "2082-04-11",
    supplier: "HEALTHCARE TECHNOLOGIES PVT. LTD.",
    grossAmount: 950,
    discountTotalAmount: 50,
    vat: 0,
    afterTaxOtherCharges: 0,
    netAmt: 950,
  }
  
];


  const columns = [
    {
      title: "Return No.",
      dataIndex: "returnNo",
      key: "returnNo",
    },
    {
      title: "Return Date",
      dataIndex: "returnDate",
      key: "returnDate",
    },
    {
      title: "Supplier Bill No.",
      dataIndex: "supplierBillNo",
      key: "supplierBillNo",
    },
    {
      title: "Bill Date",
      dataIndex: "billDate",
      key: "billDate",
    },
    {
      title: "Supplier",
      dataIndex: "supplier",
      key: "supplier",
    },
    {
      title: "Gross Amount",
      dataIndex: "grossAmount",
      key: "grossAmount",
    },
    {
      title: "Discount Total Amount",
      dataIndex: "discountTotalAmount",
      key: "discountTotalAmount",
    },
    {
      title: "VAT",
      dataIndex: "vat",
      key: "vat",
    },
    {
      title: "After Tax Other Charges",
      dataIndex: "afterTaxOtherCharges",
      key: "afterTaxOtherCharges",
    },
    {
      title: "Net Amt",
      dataIndex: "netAmt",
      key: "netAmt",
    },
    {
      title: "Actions",
      key: "actions",
      render: () => (
        <>
         <div className="flex gap-4 px-10 ">
      <Button type="" icon={<EditOutlined/> }>
        
      </Button>
      <Button icon={<CloseCircleFilled/>}>
       
      </Button>
    </div>
        </>
        
      ),
    },
  ];

  

  return (
    <>
   <div className="gap-2 px-5 bg-white rounded-lg shadow-md">
  <Table
    
    dataSource={data}
    columns={columns}
    rowKey="id"
    pagination={true}
  />
</div>

    </>
   
    

  )
  
};

export default Tab;
