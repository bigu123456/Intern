
  import axiosInstance from "./AxiosInstances";


  


export const fetcher = async (url, params = {}) => {
  const { data } = await axiosInstance.get(url, { params });
  return data;
}




