import React from 'react'
import car from"../images/car.png"
import {Button} from "antd"
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";




const Page = () => {
  return (
   <>
   <div className='bg-gray-300 flex items-center justify-between'>
    <h1> car rental </h1>
    <div>
      <h1> home page</h1>
    </div>
    <div  className='flex   items-center space-x-5 pr-10'>
       <FacebookOutlined/>
  <TwitterOutlined/>
  <InstagramOutlined/>
  <LinkedinOutlined/>
  <YoutubeOutlined/>

    </div>
   
   </div>

<div className="flex flex-wrap gap-10 px-5 py-5">
  {[...Array(18)].map((_, index) => (
    <div
      key={index}
      className="bg-white shadow-md rounded-lg px-5 py-5"
    >
      <img src={car} alt="car" className="w-40 object-cover" />
      <p>Price: $200</p>
      <p>Category: Deluxe</p>
      <Button type="primary">Order</Button>
    </div>
  ))}
  <div  className='grid place-items-center'>
    <h1 className='text-blue-950'>Have Any Questions?</h1>
    <div className='flex space-x-10   '>
   <div className='bg-gray-500 w-[500px] h-[200px] p-4'>
       <p>does the car give good services?</p>
        <p>does the car give good services?</p>
         <p>does the car give good services?</p>
          <p>does the car give good services?</p>
           <p>does the car give good services?</p>
    </div>
   <div className='bg-gray-500 w-[500px] h-[200px] p-4'>
       <p>does the car give good services?</p>
        <p>does the car give good services?</p>
         <p>does the car give good services?</p>
          <p>does the car give good services?</p>
           <p>does the car give good services?</p>
    </div>
    
    </div>
    

  </div>
 <div className="flex flex-col items-center h-86 w-full">
  <h1 className="text-green-700 text-3xl font-bold mb-6 text-center">
    Car Rental Service in Nepal
  </h1>

  <div className="flex space-x-10">
    <div>
      <p>Rent a Car in Kathmandu</p>
      <p>Rent a Car in Kathmandu</p>
      <p className='text-green-500'>Rent a Car in Kathmandu</p>
      <p className='text-green-600'>Rent a Car in Kathmandu</p>
      <p>Rent a Car in Kathmandu</p>
    </div>
    <div>
      <p>Rent a Car in Kathmandu</p>
      <p>Rent a Car in Kathmandu</p>
      <p>Rent a Car in Kathmandu</p>
      <p className='text-green-600'>Rent a Car in Kathmandu</p>
      <p className='text-green-600'>Rent a Car in Kathmandu</p>
    </div>
    <div>
      <p>Rent a Car in Kathmandu</p>
      <p>Rent a Car in Kathmandu</p>
      <p className='text-green-600'>Rent a Car in Kathmandu</p>
      <p className='text-green-600'>Rent a Car in Kathmandu</p>
      <p>Rent a Car in Kathmandu</p>
    </div>
  </div>
</div>

</div>
<div className='flex bg-[rgb(25,158,28)]  text-white text-lg '>
<div className=" py-16 px-16 w-full h-[400px]">
  <h1 className='mb-10 leading-relaxed'>Call us for further information.<br>

  </br> Customer care is here to help you<br></br> anytime.</h1>


</div>
<div className='pr-10 '>
  <p className='text-lg'>call now us </p>
  <p className='text-lg font-bold'>9810205962</p>
  <button
  type="submit"
  className="bg-[rgb(25,158,28)] text-white px-3 py-1 text-sm rounded-md hover:bg-[rgb(20,130,22)] transition"
>
  Contact Us
</button>


</div>
</div>



<div className= ' flex bg-black px-10 py-10 space-x-6'>
  <div className='space-10 text-white '>
<h1 >about us</h1>
  <p>Established in 1996, Spark Car stands as Nepal's<br></br> best vehicle rental company.</p>


  </div>
  <div className='text-white'>
    <h1>contact information</h1>
    <p>Trade Tower Thapathali, address2</p>
    <p>01-5971616/ 9801101924</p>
    <p>info@sparkcar.org</p>
    <p>info@sparkcar.org</p>
  </div>
  <div className='text-white'>
    <h1>  quick links</h1>
    <p>about us</p>
    <p>services</p>
    <p>Blog</p>
    <p>contact</p>
  </div>
  <div className='text-white space-x-4' >
    <h1> social Networks</h1>
    <FacebookOutlined className='  text-3xl'/>
  <TwitterOutlined className='  text-3xl'/>
  <InstagramOutlined className='  text-3xl'/>
  <LinkedinOutlined className='  text-3xl'/>
  <YoutubeOutlined className='  text-3xl'/>
   
  </div>


  
</div>


   
  
   
   </>
  )
}

export default Page