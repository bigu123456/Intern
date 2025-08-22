import axios from 'axios';


const token = process.env.REACT_APP_API_TOKEN || '';


const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // http://192.168.120.171:8000
});

axiosInstance.interceptors.request.use(config => {
 console.log("Token from env:", token);
  config.headers.Authorization = `Bearer ${token}`;
  config.headers['X-User-Id'] = '1';
  config.headers['X-Org-Id'] = '1';
  config.headers['X-Sub-Org-Id'] = '1';
  config.headers['X-Feature-Code'] = generateRandomFeatureCode();

  return config;
});

function generateRandomFeatureCode() {
  return 'random-code-123';
}

export default axiosInstance;
