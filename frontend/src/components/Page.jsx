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
</div>


<div className='"bg-[rgb(25,158,28)] py-10 px-10'>
  <h1>Call us for further information.<br>
  </br> Customer care is here to help you anytime.</h1>

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