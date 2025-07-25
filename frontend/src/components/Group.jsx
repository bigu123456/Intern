import React from 'react'
import Footer from './Footer';
import Body from './Body';
import { TeamOutlined} from '@ant-design/icons';
import {
  HomeOutlined,
  PhoneOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import {
  EnvironmentOutlined,
  PictureOutlined,
  CrownOutlined,
} from '@ant-design/icons';



const Group = () => {
  return (
   <>
   <div className='flex justify-between text-blue-800 px-5 py-5 font-serif '>
    <h1> <EnvironmentOutlined/>NATURAL</h1>
     <h1> <PictureOutlined/>BEAUTY</h1>
    <h1> <CrownOutlined/> PLACES</h1>
   
   </div>
   <div className='flex justify-center bg-black space-x-10 px-4 py-5 cursor-pointer  text-xl'>
   
    <a href='/'  className='text-white'> <HomeOutlined/>Home</a>
    <a href='/' className='text-white'> <  TeamOutlined/>Our team</a>
    <a href='/ ' className='text-white'> <PhoneOutlined/>Contact</a>
    <a href='/' className='text-white'> < AppstoreOutlined/>services</a>
   </div>
   <div>
     <Body/>

   </div>
  

   <Footer/>
   </>
  )
}

export default Group
