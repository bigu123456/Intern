import React from "react";
import { Form, Input } from "antd";

const List = () => {
  return (
    <>
      <div className="flex justify-between px-10 py-10">
        {/* Scheme Info */}
        <div className="bg-white rounded-md shadow-md flex w-1/3 min-h-64 p-4">
          <h3>Scheme Info</h3>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-md shadow-md flex flex-col w-1/3 min-h-64 p-4">
          <h3 className="mb-4">Additional Information</h3>

          <Form className="w-full">
            <Form.Item
              label="Return to:"
              name="ReturnTo"
              rules={[{ required: true, message: "Enter name" }]}
            >
              <Input placeholder="Enter name" className="w-40" />
            </Form.Item>

            <Form.Item
              label="Return By:"
              name="ReturnBy"
              rules={[{ required: true, message: "Enter name" }]}
            >
              <Input placeholder="Enter name" className="w-40" />
            </Form.Item>

            <Form.Item
              label="Remarks:"
              name="Remarks"
              rules={[{ required: true, message: "Enter name" }]}
            >
              <Input placeholder="Enter name" className="w-40" />
            </Form.Item>
          </Form>
        </div>

        {/* Gross Amount Section */}
        <div className="bg-white rounded-md shadow-md flex flex-col w-1/3 min-h-64 p-4">
          {/* Heading */}
          <h3 className="mb-4">Gross Amount:</h3>

          {/* Discount field below heading */}
          <Form className="w-full" >
            <Form.Item
              label="Discount:"
              name="Discount"
              rules={[{ required: true, message: "Enter discount" }]}
            >
              <Input placeholder="Enter discount" className="w-40" />
            </Form.Item>
            <Form.Item
              label="Total Amt:"
              name="Total Amt:"
              rules={[{ required: true, message: "Enter discount" }]}
            >
              <Input placeholder="Enter discount" className="w-40" />
            </Form.Item>
            <Form.Item
              label="13% Vat:"
              name="13% Vat"
              rules={[{ required: true, message: "Enter discount" }]}
            >
              <Input placeholder="Enter discount" className="w-40" />
              

            </Form.Item>
          </Form>

          <h3>Amount After Tax:</h3>
       
          <Form  layout="vertical">
            <Form.Item
            label="Others charges"
            name="Others charges"
            rules={[{required:true, message:"enetr charges"}]}
            >
              <Input
              placeholder="enetr amount"
              className="w-ful h-10"/>


            </Form.Item>
          </Form>
          <div className="py-4">
             <h3>Net Amount</h3>

          </div>
         

          
        </div>
      </div>
    </>
  );
};

export default List;
