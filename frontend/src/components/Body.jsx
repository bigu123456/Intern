import React from 'react';
import Nature from "../images/Nature.png";
import Nature2 from "../images/Nature2.png";
import Nature3 from "../images/Nature3.png";
import Nature4 from "../images/Nature4.png";
import Nature5 from "../images/Nature5.png";
import Nature6 from "../images/Nature6.png";
import Nature7 from "../images/Nature7.png";
import Nature8 from "../images/Nature8.png";
import Nature10 from "../images/Nature10.png";
import Nature9 from "../images/Nature9.png";
import { Input} from "antd"
import { SearchOutlined } from "@ant-design/icons";

const Body = () => {
  return (
    <>
      <div className="text-right pr-20 px-6 py-6 ">
  <Input
  
  
    type="search"
     prefix={<SearchOutlined />}
    placeholder="Search........"
    className="w-64 rounded-md px-2 py-1 border  "
    
  />
</div>
      <div className='flex justify-center font-Cursive'>
        <h1>Here is Natural Beauty Places</h1>
      </div>

      {/* First Row */}
      <div className='flex  justify-center gap px-4 py-4'>
        <div className='bg-white px-6 py-6 rounded-lg shadow-md'>
             <img src={Nature} alt='family' className='w-60 h-60 object-cover rounded-md' />
             <p> Location:Greenland </p>
             <p>Famous for: Rani Mahal </p>
             <p>Specialty:Traditional Dhaka topi</p>
            <p>Culture:Newar heritage</p>
              </div>
               <div  className='bg-white rounded-xl shadow-md px-5 py-5'>
                <img src={Nature10} alt='family' className='w-60 h-60 object-cover rounded-md' />
              <p> Location:London</p>
              <p>Famous for: Rani Mahal </p>
             <p>Specialty: Traditional Dhaka topi</p>
            <p>Culture: Newar heritage</p>

              </div>
               <div  className='bg-white rounded-xl shadow-md px-5 py-5'>
                 <img src={Nature2} alt='family' className='w-60 h-60 object-cover rounded-md' />
                 <p>Location:palpa</p>
                 <p>Famous for: Rani Mahal</p>
             <p>Specialty: Traditional Dhaka topi</p>
            <p>Culture: Newar heritage</p>

              </div>
               <div  className='bg-white rounded-xl shadow-md px-5 py-5'>
                 <img src={Nature3} alt='family' className='w-60 h-60 object-cover rounded-md' />
                 <p>Location:kathamndu</p>
                 <p>Famous for: Rani Mahal</p>
             <p>Specialty: Traditional Dhaka topi</p>
            <p>Culture:Newar heritage</p>

              </div>
               <div  className='bg-white rounded-xl shadow-md px-5 py-5'>
                        <img src={Nature4} alt='family' className='w-60 h-60 object-cover rounded-md' />
                        <p>Location:Pokhara</p>
                         <p>Famous for: Rani Mahal</p>
             <p>Specialty: Traditional Dhaka topi</p>
            <p>Culture:Newar heritage</p>



              </div>
       

        
       
       
      </div>

      {/* Second Row */}
     <div className='flex  justify-center gap px-4 py-4'>
        <div className='bg-white rounded-lg shadow-md py-6 px-6'>
         <img src={Nature5} alt='family' className='w-60 h-60 object-cover rounded-md' />
         <p> Location:Jhapa</p>

             <p>Famous for: Rani Mahal </p>
             <p>Specialty: Traditional Dhaka topi</p>
            <p>Culture:Newar heritage</p>

        </div>
        <div className='bg-white px-6 py-6 rounded-lg shadow-md'>
         <img src={Nature6} alt='family' className='w-60 h-60 object-cover rounded-md' />
         <p> Location:Belbari</p>

            <p>Famous for: Rani Mahal </p>
             <p>Specialty: Traditional Dhaka topi</p>
            <p>Culture:Newar heritage</p>
        </div>
         <div  className='bg-white rounded-xl shadow-md px-5 py-5'>
                    <img src={Nature7} alt='family' className='w-60 h-60 object-cover rounded-md' />
                    <p> Location:Dharan</p>

            <p>Famous for: Rani Mahal </p>
             <p>Specialty: Traditional Dhaka topi</p>
            <p>Culture:Newar heritage</p>
        </div>
         <div  className='bg-white rounded-xl shadow-md px-5 py-5'>
                    <img src={Nature8} alt='family' className='w-60 h-60 object-cover rounded-md' />
                    <p> Location:Ithari</p>

            <p>Famous for: Rani Mahal</p>
             <p>Specialty: Traditional Dhaka topi</p>
            <p>Culture:Newar heritage</p>
        </div>
         <div  className='bg-white rounded-xl shadow-md px-5 py-5'>
                    <img src={Nature9} alt='family' className='w-60 h-60 object-cover rounded-md' />
                    <p> Location:Biratnagar</p>

            <p>Famous for: Rani Mahal </p>
             <p>Specialty: Traditional Dhaka topi</p>
            <p>Culture:Newar heritage</p>

        </div>
      </div>
    

    </>
  );
};

export default Body;
