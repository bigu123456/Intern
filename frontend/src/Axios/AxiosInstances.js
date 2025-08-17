import axios from 'axios';

const token = process.env.REACT_APP_API_TOKEN || '';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  // headers: {
  //   Authorization: `Bearer ${token}`,
  // },
});

 console.log("API URL:", process.env.REACT_APP_API_URL);
 console.log("Token from env:", token);

axiosInstance.interceptors.request.use(config => {
  
  config.headers.Authorization = `Bearer ${process.env.REACT_APP_API_TOKEN || ''}`;

  //console.log('Sending token:', config.headers.Authorization);

  config.headers['X-User-Id'] = '1';
  config.headers['X-Org-Id'] = '120';
  config.headers['X-Sub-Org-Id'] = '120';
  config.headers['X-Feature-Code'] = generateRandomFeatureCode();

  return config;
});

function generateRandomFeatureCode() {
  return 'random-code-123';
}

export default axiosInstance;