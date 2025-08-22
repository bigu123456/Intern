
  import axiosInstance from "./AxiosInstances";
  console.log("Axios base URL:", axiosInstance.defaults.baseURL);


  


export const fetcher = async (url, params = {}) => {

  
  
  const { data } = await axiosInstance.get(url, { params });
  return data;
};






