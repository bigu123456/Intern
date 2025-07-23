import React from 'react'
import Hello from "../images/Hello.png"
import Food1 from"../images/Food1.png"
import Food2 from "../images/Food2.png"
import Food3 from "../images/Food3.png"
import Food4 from"../images/Food4.png"
import Food5 from"../images/Food5.png"

import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { EnvironmentOutlined, HomeOutlined, BankOutlined, GlobalOutlined, CompassOutlined } from '@ant-design/icons';
import {
  PhoneOutlined,
  InfoCircleOutlined,
  AppstoreOutlined,
  ReadOutlined,
  ToolOutlined,
} from '@ant-design/icons';
import {
  CoffeeOutlined,
  ShopOutlined,
  ForkOutlined,
  FireOutlined,
  AppleOutlined,
} from '@ant-design/icons';
import { Button } from "antd"

const Food = () => {
  return (
    <>
      <div>
        <div className='flex justify-between px-10 py-5 bg-yellow-400 text-black'> 
          <h1>Food services</h1>
          <h1> Welcome to Thakali Resturant</h1>
          <Button type='primary' htmlType='submit' className='pr-20 rounded-md  shadow-sm text-xl w-30'>Login</Button>
        </div>
        <div className='flex justify-center items-center space-x-7 px-10 py-10 bg-yellow-400 text-black'>
          <a className='cursor-pointer' href="/">Home</a>
          <a className='cursor-pointer' href="/service">Service</a>
          <a className='cursor-pointer' href="/contact">Contact Us</a>
          <a className='cursor-pointer' href="/about">About Us</a>
        </div>
      </div>

      <div className='flex bg-black'>
        <div className='text-white px-10 py-10'>
          <h1>Vegetarian Recipes</h1>
          <p>Welcome to the 3HO Vegetarian Recipes Collection, where nourishment meets 
            intention. Explore a diverse array of delicious, health-conscious recipes inspired
            by the yogic lifestyle. Whether you’re looking to
            energize your morning, rejuvenate after 
            a long day, or celebrate with friends and family.</p>
          <p>From hearty lacto-vegetarian dishes to refreshing beverages and sweet treats, 
            every recipe is designed to uplift your spirit and nourish your body. Dive into 
            a world of wholesome ingredients, vibrant flavors, and culinary inspiration that
            aligns with your journey toward a balanced and fulfilling life.</p>
            
        </div>
        <div className='w-full text-right py-10 pr-10 text-white'>
          <img src={Food5} alt='Hello'></img>
         <p className="mb-4 leading-relaxed">
  From hearty lacto-vegetarian dishes to refreshing beverages and sweet treats, every recipe is designed to uplift your spirit and nourish your body.
</p>
<p className="mb-4 leading-relaxed">
  Dive into a world of wholesome ingredients, vibrant flavors, and culinary inspiration that aligns with your journey toward a balanced and fulfilling life.
</p>

        </div>
        <div className='w-full text-left py-10 pr-10 text-white'>
          <img src={Hello} alt='Hello' className=' '></img>
         <p className="mb-4 leading-relaxed">
  From hearty lacto-vegetarian dishes to refreshing beverages and sweet treats, every recipe is designed to uplift your spirit and nourish your body.
</p>
<p className="mb-4 leading-relaxed">
  Dive into a world of wholesome ingredients, vibrant flavors, and culinary inspiration that aligns with your journey toward a balanced and fulfilling life.
</p>
<p className="mb-4 leading-relaxed">
  From hearty lacto-vegetarian dishes to refreshing beverages and sweet treats, every recipe is designed to uplift your spirit and nourish your body.
</p>
<p className="mb-4 leading-relaxed">
  Dive into a world of wholesome ingredients, vibrant flavors, and culinary inspiration that aligns with your journey toward a balanced and fulfilling life.
</p>


        </div>
      </div>
      {/* Body*/}
      <div className='flex justify-center items-center'>
        <h1> here is our Food</h1>
      </div>
      <div className='flex space-x-8'>
        
        <div  className='bg-white rounded-xl shadow-md px-5 py-5'>
            <img src={Food1}alt='Food1' className=' w-40'></img>
            <p>Price: RPS 200 per</p>
         <p>Items: Pizza</p>
       <p>Condition: Fresh</p>
       <p>Size: Medium</p>
       <p>Available: Yes</p>
       <Button type='primary' htmlType='submit'>Order</Button>
        </div>
         <div  className='bg-white rounded-xl shadow-md px-5 py-5'>
            <img src={Food2}alt='Food1' className=' w-40'></img>
            <p>Price: RPS 200 per</p>
         <p>Items: Pizza</p>
       <p>Condition: Fresh</p>
       <p>Size: Medium</p>
       <p>Available: Yes</p>
        <Button type='primary' htmlType='submit'>Order</Button>
        </div>
         <div  className='bg-white rounded-xl shadow-md px-5 py-5'>
            <img src={Food3}alt='Food1' className=' w-40'></img>
            <p>Price: RPS 200 per</p>
         <p>Items: Pizza</p>
       <p>Condition: Fresh</p>
       <p>Size: Medium</p>
       <p>Available: Yes</p>
        <Button type='primary' htmlType='submit'>Order</Button>
        </div>
         <div  className='bg-white rounded-xl shadow-md px-5 py-5'>
            <img src={Food4}alt='Food1' className=' w-40'></img>
            <p>Price: RPS 200 per</p>
         <p>Items: Pizza</p>
       <p>Condition: Fresh</p>
       <p>Size: Medium</p>
       <p>Available: Yes</p>
        <Button type='primary' htmlType='submit'>Order</Button>
        </div>
         <div  className='bg-white rounded-xl shadow-md px-5 py-5'>
            <img src={Food5}alt='Food1' className=' w-40'></img>
            <p>Price: RPS 200 per</p>
         <p>Items: Pizza</p>
       <p>Condition: Fresh</p>
       <p>Size: Medium</p>
       <p>Available: Yes</p>
        <Button type='primary' htmlType='submit'>Order</Button>
        </div>
         <div  className='bg-white rounded-xl shadow-md px-5 py-5'>
            <img src={Food1}alt='Food1' className=' w-40'></img>
            <p>Price: RPS 200 per</p>
         <p>Items: Pizza</p>
       <p>Condition: Fresh</p>
       <p>Size: Medium</p>
       <p>Available: Yes</p>
        <Button type='primary' htmlType='submit'>Order</Button>
        </div>
        
        
      </div>

       
      
      <div className='flex space-x-8'>
        
        <div  className='bg-white rounded-xl shadow-md px-5 py-5'>
            <img src={Food1}alt='Food1' className=' w-40'></img>
            <p>Price: RPS 200 per</p>
         <p>Items: Pizza</p>
       <p>Condition: Fresh</p>
       <p>Size: Medium</p>
       <p>Available: Yes</p>
        <Button type='primary' htmlType='submit'>Order</Button>
        </div>
         <div  className='bg-white rounded-xl shadow-md px-5 py-5'>
            <img src={Food2}alt='Food1' className=' w-40'></img>
            <p>Price: RPS 200 per</p>
         <p>Items: Pizza</p>
       <p>Condition: Fresh</p>
       <p>Size: Medium</p>
       <p>Available: Yes</p>
        <Button type='primary' htmlType='submit'>Order</Button>
        </div>
         <div  className='bg-white rounded-xl shadow-md px-5 py-5'>
            <img src={Food3}alt='Food1' className=' w-40'></img>
            <p>Price: RPS 200 per</p>
         <p>Items: Pizza</p>
       <p>Condition: Fresh</p>
       <p>Size: Medium</p>
       <p>Available: Yes</p>
        <Button type='primary' htmlType='submit'>Order</Button>
        </div>
         <div  className='bg-white rounded-xl shadow-md px-5 py-5'>
            <img src={Food5}alt='Food1' className=' w-40'></img>
            <p>Price: RPS 200 per</p>
         <p>Items: Pizza</p>
       <p>Condition: Fresh</p>
       <p>Size: Medium</p>
       <p>Available: Yes</p>
        <Button type='primary' htmlType='submit'>Order</Button>
        </div>
         <div  className='bg-white rounded-xl shadow-md px-5 py-5'>
            <img src={Food1}alt='Food1' className=' w-40'></img>
            <p>Price: RPS 200 per</p>
         <p>Items: Pizza</p>
       <p>Condition: Fresh</p>
       <p>Size: Medium</p>
       <p>Available: Yes</p>
        <Button type='primary' htmlType='submit'>Order</Button>
        </div>
         <div  className='bg-white rounded-xl shadow-md px-5 py-5'>
            <img src={Food4}alt='Food1' className=' w-40'></img>
            <p>Price: RPS 200 per</p>
         <p>Items: Pizza</p>
       <p>Condition: Fresh</p>
       <p>Size: Medium</p>
       <p>Available: Yes</p>
        <Button type='primary' htmlType='submit'>Order</Button>
        </div>
        
        
      </div>

      {/* Footer */}
      <div className='flex bg-yellow-400 justify-between px-10 py-5 text-black'>

        <div>
          <h1>Quick links</h1>
          <p>Contact Us</p>
          <p>About Our Company</p>   
          <p>Services We Offer</p>
          <p>Explore Our Blog</p>
          <p>services</p>
          
          <div className='space-x-4 text-3xl'>
            <PhoneOutlined/>
  <InfoCircleOutlined/>
  <AppstoreOutlined/>
  <ReadOutlined/>
  <ToolOutlined/>
          </div>
        </div>

        <div>
          <h1>Address</h1>
          <p> 123 Main Street, Kathmandu, Nepal</p>
          <p>Trade Tower, Thapathali, Kathmandu</p>
          <p>456 Lakeside Road, Pokhara, Nepal</p>
          <p>789 Durbar Marg, Kathmandu, Nepal</p>
          <p>Building 12, New Baneshwor, Kathmandu</p>
          <div className='space-x-4 text-3xl'>
             <EnvironmentOutlined/>
          <HomeOutlined/>
           <BankOutlined/>
            <GlobalOutlined/>
            < CompassOutlined/>

          </div>
         
        </div>

        <div>
          <h1>Contact</h1>
          <p>  Phone: 9810205962</p>
          <p>Email: info@sparkcar.org</p>
          <p>Mobile: 9801101924</p>
          <p>Fax: 01-5971616</p>
          <p>Support: support@sparkcar.org</p>
          <div className='space-x-5'>
            <FacebookOutlined className='  text-3xl'/>
            <TwitterOutlined className='  text-3xl'/>
            <InstagramOutlined className='  text-3xl'/>
            <LinkedinOutlined className='  text-3xl'/>
            <YoutubeOutlined className='  text-3xl'/>

          </div>
           
        </div>

        <div>
    <p><CoffeeOutlined /> Pizza</p>
    <p><ShopOutlined /> Burger</p>
    <p><ForkOutlined /> Pasta</p>
    <p><FireOutlined /> Sushi</p>
    <p><AppleOutlined /> Salad</p>
        </div>
      </div>
    </>
  )
}

export default Food
