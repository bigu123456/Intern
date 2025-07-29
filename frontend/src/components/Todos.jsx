import React from "react";
import Nature1 from "../images/Nature1.png";

const Todos = () => {
  return (
    <>
    <div className="flex h-screen w-full px-5">
         <div className="flex  flex-col   justify-end py-10 ">
        <img src={Nature1} alt="Nature" className="w-40 h-40 object-cover rounded-md" />
         <img src={Nature1} alt="Nature" className="w-40 h-40 object-cover rounded-md" />
          <img src={Nature1} alt="Nature" className="w-40 h-40 object-cover rounded-md" />
           <img src={Nature1} alt="Nature" className="w-40 h-40 object-cover rounded-md" />
            
            
            
    
      </div>
      <div className="flex w-full justify-end pr-10 overflow-y-auto ">
                    <img src={Nature1} alt="Nature" className="w-40 h-40 object-cover rounded-md" />
                    <img src={Nature1} alt="Nature" className="w-40 h-40 object-cover rounded-md" />
         <img src={Nature1} alt="Nature" className="w-40 h-40 object-cover rounded-md" />
          <img src={Nature1} alt="Nature" className="w-40 h-40 object-cover rounded-md" />
           <img src={Nature1} alt="Nature" className="w-40 h-40 object-cover rounded-md" />
            <img src={Nature1} alt="Nature" className="w-40 h-40 object-cover rounded-md" />
            

        
      </div>
     
        
    </div>
    
    <div className="flex  justify-end items-end h-screen pr-10 space-x-10 fixed  bottom-0 right-0">
        <img src={Nature1} alt="Nature" className="w-40 h-40 object-cover rounded-md" />
         <img src={Nature1} alt="Nature" className="w-40 h-40 object-cover rounded-md" />
          <img src={Nature1} alt="Nature" className="w-40 h-40 object-cover rounded-md" />
           <img src={Nature1} alt="Nature" className="w-40 h-40 object-cover rounded-md" />
            <img src={Nature1} alt="Nature" className="w-40 h-40 object-cover rounded-md" />
             <img src={Nature1} alt="Nature" className="w-40 h-40 object-cover rounded-md" />
    
      </div>
     
    </>
 
    
      


      
   
  );
};

export default Todos;
