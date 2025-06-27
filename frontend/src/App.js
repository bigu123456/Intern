import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import Test from "./elements/Test";
import LoginPage from "./elements/Loginpage";
import Dashbaord from "./elements/Dashboard";
import Bigyan from "./elements/Bigyan";
import Header from "./elements/Header";
import Calculator from "./elements/Calculator";
import User from "./elements/User"
import Sidebar from "./elements/Sidebar";
import Role from "./elements/Role";
import Filter from "./elements/Filter";
import Crud from "./elements/Curd";
import Ant from "./components/Ant";
import Data from "./components/Data";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        
        
      

       
        
          
          <Route path="Test"element={<Test/>}/>      
          <Route path="/Loginpage" element={<LoginPage />} /> 
          <Route path="/" element={<Dashbaord/>}/>
          <Route path="/Bigyan" element={<Bigyan/>}/>
          <Route path="/Header" element={<Header/>}/>
          <Route path="Calculator" element={<Calculator/>}/>
          <Route path="User" element={<User/>}/>
        <Route path="Sidebar" element={<Sidebar/>}/>
        <Route path="Role" element={<Role/>}/>
        <Route path="Filter"element={<Filter/>}/>
        <Route path="Curd" element={<Crud/>}/>
        <Route path="Ant" element={<Ant/>}/>
        <Route path="Data" element={<Data/>}/>
         
          
       
        


        

        
          


         

        
      </Routes>
      {/* 🔥 Toast Container should be placed here! */}
      <ToastContainer />
    
    </Router>
  );
};

export default App;
