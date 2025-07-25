import React from 'react'
import {
  HomeOutlined,
  PhoneOutlined,
  AppstoreOutlined,
  TeamOutlined
} from '@ant-design/icons';
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,

  
} from '@ant-design/icons';
import {
  
  MailOutlined,
  EnvironmentOutlined

} from '@ant-design/icons';

const Footer = () => {
  return (
   <>
  
    <div className='flex  justify-between bg-black cursor-pointer  space-x-10 px-5 py-5'>
         <div className=' text-white'>
    <h1>Quicks Links</h1>
     
      <p  className='text-white font-semibold' > <HomeOutlined/>Home</p>
      <p className='text-white font-semibold '> <  TeamOutlined/>Our team</p>
      <p className='text-white font-semibold'> <PhoneOutlined/>Contact</p>
      <p className='text-white font-semibold'> < AppstoreOutlined/>services</p>
     </div>
     <div className='text-white'>
        <h1>Social Media</h1>
        <p className='text-white font-semibold'> <FacebookOutlined/>FaceBook</p>
        <p className='text-white font-semibold'> <LinkedinOutlined/>LinkedIn</p>
        <p className='text-white font-semibold'><YoutubeOutlined/> Youtube</p>
        <p className='text-white font-semibold'> <InstagramOutlined/>Instagram</p>

     </div>
     <div className='text-white'>
        <h1>Contact Info</h1>
        <p className='text-white font-semibold'> <PhoneOutlined/>9810205962 </p>
        <p className='text-white font-semibold'> <MailOutlined/>Bigyanacharya905@gmail.com</p>
        <p className='text-white font-semibold'><EnvironmentOutlined/>Morang/Belbari-11</p>
        <p className='text-white font-semibold'> <EnvironmentOutlined/>Munal chok</p>

     </div>

   </div>
   <div>

   </div>
   <footer className="text-center py-4 text-gray-600">
  © Lx Legend.All rights reserved.
</footer>
   
  
   </>
  )
}

export default Footer