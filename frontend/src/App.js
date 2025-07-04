import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'react-toastify/dist/ReactToastify.css';

// Components
import Test from "./elements/Test";
import LoginPage from "./elements/Loginpage";
import Dashbaord from "./elements/Dashboard";
import Bigyan from "./elements/Bigyan";
import Header from "./elements/Header";
import Calculator from "./elements/Calculator";
import User from "./elements/User";
import Sidebar from "./elements/Sidebar";
import Role from "./elements/Role";
import Filter from "./elements/Filter";
import Crud from "./elements/Curd";
import Ant from "./components/Ant";
import Data from "./components/Data";
import Admission from "./elements/Admission";
import Bookinglist from "./elements/Bookinglist";
import ClaimManagement from "./elements/Claimmanagement";
import Learning from "./elements/Learning";
import Antd from "./elements/Antd";
import Fetch from "./elements/Fetch";
import Querry from "./elements/Querry";


const queryClient = new QueryClient();

const App = () => {
  return (
   
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/Test" element={<Test />} />      
          <Route path="/Loginpage" element={<LoginPage />} /> 
          <Route path="/" element={<Dashbaord />} />
          <Route path="/Bigyan" element={<Bigyan />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/User" element={<User />} />
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/Role" element={<Role />} />
          <Route path="/Filter" element={<Filter />} />
          <Route path="/Curd" element={<Crud />} />
          <Route path="/Ant" element={<Ant />} />
          <Route path="/Data" element={<Data />} />
          <Route path="/Admission" element={<Admission />} />
          <Route path="/Bookinglist" element={<Bookinglist />} />
          <Route path="/Claimmanagement" element={<ClaimManagement />} />
          <Route path="/Learning" element={<Learning />} />
          <Route path="/Antd" element={<Antd />} />
          <Route path="/Fetch" element={<Fetch />} />
          <Route path="Querry" element={<Querry/>}/>
        </Routes>

        {/* Toasts (for notifications) */}
        <ToastContainer />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
