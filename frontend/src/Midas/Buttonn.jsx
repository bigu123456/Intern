import React from "react";
import { Button } from "antd";
import { HomeOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from "react-router-dom";
import {  RightOutlined } from '@ant-design/icons';

const Buttonn = () => {
  const navigate = useNavigate();
  const location = useLocation();

 
  const currentPath = location.pathname;

  const handlePurchaseReturn = () => {
    navigate("/Inventory");
  };

  const handlePurchaseReturnList = () => {
    navigate("/Returnlist");
  };

  return (
    <>
    <div className=" px-10 py-10 bg-gray-50 rounded-md shadow-md">
      <div className="flex space-x-5">
       <p> <HomeOutlined/> Inventory <RightOutlined/></p>
      <p>Purchase <RightOutlined/></p>
      <p> Purchase Return</p>
        
      </div>
     
  
      <div className="flex  py-5 gap-4">
    
      <Button
        type={currentPath === "/Inventory" ? "primary" : "default" }
        onClick={handlePurchaseReturn}
        className="text-xl"
      >
        Purchase Return
      </Button>

      <Button
        type={currentPath === "/Returnlist" ? "primary" : "default"}
        onClick={handlePurchaseReturnList}
        className="text-xl"
      >
        Purchase Return List
      </Button>
    </div>
    
      </div>
    </>
  
  );
};

export default Buttonn;
