import React, { useState } from "react";
import { Form, Input, Button } from "antd";

const Calculation = () => {
  const [discountAmount, setDiscountAmount] = useState("0.00");
  const [totalAmount, setTotalAmount] = useState("0.00");
  const [form] = Form.useForm();

  const onFinish = () => {
    const values = form.getFieldsValue();
    const qty = parseFloat(values.qty) || 0;
    const rate = parseFloat(values.Rate) || 0;
    const dis = parseFloat(values.Dis) || 0;

    const total = qty * rate;
    const disAmount = (total * dis) / 100;
    const finalAmount = total - disAmount;

    setDiscountAmount(disAmount.toFixed(2));
    setTotalAmount(finalAmount.toFixed(2));
  };

  const clear = () => {
    form.resetFields();
    setDiscountAmount("0.00");
    setTotalAmount("0.00");
  };

  return (
    <div className="flex">
      <Form
        form={form}
      onFinish={onFinish}
        layout="inline"
        className="flex flex-wrap "
      >
      
        <Form.Item
          label="Qty"
          name="qty"
          rules={[{ required: true, message: "Enter Qty" }]}
        >
          <Input placeholder="Enter Qty" />
        </Form.Item>

        <Form.Item
          label="Rate"
          name="Rate"
          rules={[{ required: true, message: "Enter Rate" }]}
        >
          <Input placeholder="Enter Rate" />
        </Form.Item>

        <Form.Item label="Dis%" name="Dis">
          <Input placeholder="Enter Dis%" />
        </Form.Item>

   
       <div className="flex items-center space-x-6">

  <p className="text-lg font-bold text-green-700">
    DiscountAmount: {discountAmount}
  </p>
  <p className="text-lg font-bold text-blue-700">
    TotalAmount: {totalAmount}
  </p>


  <Button type="primary" onClick={clear}>
    Clear
  </Button>
</div>

     
        
      </Form>
    </div>
  );
};

export default Calculation;
