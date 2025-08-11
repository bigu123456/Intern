import axios from 'axios';

const token = process.env.REACT_APP_API_TOKEN;


const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
console.log("token",process.env.REACT_APP_API_URL)

axiosInstance.interceptors.request.use(config => {
   console.log('Sending token:', config.headers.Authorization);
  config.headers['X-User_id 1'] = '1';          
  config.headers['X-Org-Id '] = '120';           
  config.headers['X-Sub-Org-Id'] = '120';       
  config.headers['X-Feature-Code'] = generateRandomFeatureCode(); 
  return config;
});

function generateRandomFeatureCode() {
  return 'random-code-123';
}

export default axiosInstance;
