import { Table, Button } from "antd";
import { UndoOutlined } from "@ant-design/icons";
import Header from "../elements/Header";
import{Input} from "antd"

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
      <Header />

     

   
      <div className="flex py-5 px-10 gap-4">
        <Button type="primary">Purchase Return List</Button>
        <Button type="primary">Purchase Return List</Button>
      </div>

    
      <div className="px-10 flex items-center gap-2">
        <UndoOutlined style={{ fontSize: "16px" }} />
        <h1 className="text-base font-semibold">Purchase Return</h1>
      </div>
      <div className="flex gap-8 px-12 py-10">
        <div>
           <p>store</p>
           <Input
           type="search"
           className="w-96"
           placeholder="select store"
           />

        </div>
        <div>
          <p>Suplier name</p>
         <Input
           type="search"
           className="w-96"
           placeholder="select store"
           />

        </div>
       
        

      </div>
    
      <div className="flex flex-wrap gap-2 py-10 px-10 bg-white rounded-lg shadow-md ">
        {columns.map((col, index) => (
          <div
            key={index}
            className="bg-gray-200 text-xs text-gray-700 px-2 py-1 rounded"
            style={{ minWidth: "80px", textAlign: "center" }}
          >
            {col.title}
          </div>
        ))}
        <Table columns={columns} bordered pagination={false} />
      </div>
      

    
     

   
      <div className="flex justify-between px-10 py-10">
        <div className="bg-white rounded-md shadow-md flex w-1/3 min-h-56 p-4">
          <h3>Scheme Info</h3>
        </div>
        <div className="bg-white rounded-md shadow-md flex w-1/3 min-h-56 p-4">
          <h3>Additional Information</h3>
        </div>
        <div className="bg-white rounded-md shadow-md flex w-1/3 min-h-56 p-4">
          <h3>Gross Amount:</h3>
        </div>
      </div>
    </>
  );
};

export default Purchase;
