import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import Purchase from "./Purchase";

const Calculation = () => {
  const [discountAmount, setDiscountAmount] = useState("0.00");
  const [vatAmount, setVatAmount] = useState("0.00");
  const [totalAmount, setTotalAmount] = useState("0.00");
  const [tableData, setTableData] = useState([]);
  const [showTotal, setShowTotal] = useState(false);
  const [form] = Form.useForm();

  // Live calculation: discount + VAT
  const handleValuesChange = () => {
    const values = form.getFieldsValue();
    const qty = parseFloat(values.qty) || 0;
    const rate = parseFloat(values.Rate) || 0;
    const dis = parseFloat(values.Dis) || 0;
    const vat = parseFloat(values.VAT) || 0;

    const total = qty * rate; 


    
    const disAmount = (total * dis) / 100; // discount
    const afterDiscount = total - disAmount;
    const vatAmt = (afterDiscount * vat) / 100; // VAT
    const finalAmt = afterDiscount + vatAmt; // total with VAT

    setDiscountAmount(disAmount.toFixed(2));
    setVatAmount(vatAmt.toFixed(2));
    setTotalAmount(finalAmt.toFixed(2));
  };

  // When Add button is clicked
  const calculate = () => {
    const values = form.getFieldsValue();
    const qty = parseFloat(values.qty) || 0;
    const rate = parseFloat(values.Rate) || 0;
    const dis = parseFloat(values.Dis) || 0;
    const vat = parseFloat(values.VAT) || 0;

    const total = qty * rate;
    const disAmount = (total * dis) / 100;
    const afterDiscount = total - disAmount;
    const vatAmt = (afterDiscount * vat) / 100;
    const finalAmt = afterDiscount + vatAmt;

    setTotalAmount(finalAmt.toFixed(2));
    setShowTotal(true);

    // Add row to table
    const newRow = {
      key:tableData.length+1,
      SN: tableData.length + 1,
      qty,
      rate,
      dis,
      vat,
      discountAmount: disAmount.toFixed(2),
      vatAmount: vatAmt.toFixed(2),
      totalAmount: finalAmt.toFixed(2),
    };
    setTableData([...tableData, newRow]);
  };

  const clear = () => {
    form.resetFields();
    setDiscountAmount("");
    setVatAmount("");
    setTotalAmount("");
    setShowTotal(false);
  };

  // Delete row
  const deleteRow = (key) => {
    const updatedData = tableData.filter((item) => item.key !== key);
    setTableData(updatedData);
  };

  return (
    <>
      <div className="flex">
        <Form
          form={form}
          onFinish={calculate}
          onValuesChange={handleValuesChange}
          layout="inline"
          className="flex flex-wrap"
        >
          <Form.Item
            label="Qty"
            name="qty"
            rules={[{ required: true, message: "Enter Qty" }]}
          >
            <Input placeholder="Enter Qty"
            
             />
          </Form.Item>

          <Form.Item
            label="Rate"
            name="Rate"
            rules={[{ required: true, message: "Enter Rate" }]}
          >
            <Input placeholder="Enter Rate" />
          </Form.Item>

          <Form.Item label="Dis%" 
          name="Dis"
          rules={[{required:true, message:"enetr a discount%"}]}
          >
            <Input placeholder="Enter Dis%" />
          </Form.Item>

          <Form.Item label="VAT%" 
          name="VAT" 
          rules={[{required:true, message:"enter a VAT"}]}>
            <Input placeholder="Enter VAT%" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>

          <Form.Item>
            <Button type="default" onClick={clear}>
              Clear
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className="flex items-center space-x-6 mt-4">
        <p className="text-lg font-bold text-green-700">
          DiscountAmount: {discountAmount}
        </p>
        <p className="text-lg font-bold text-orange-700">VAT: {vatAmount}</p>
        {showTotal && (
          <p className="text-lg font-bold text-blue-700">
            TotalAmount: {totalAmount}
          </p>
        )}
      </div>

      <Purchase val={tableData} remove={deleteRow} />
    </>
  );
};

export default Calculation;
