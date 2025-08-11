
  import axiosInstance from "./AxiosInstances";


  


export const fetcher = async (url, params = {}) => {
  const { data } = await axiosInstance.get(url, { params });
  console.log("url from fetcher"+url)
    console.log("params from fetcher"+params)

  return data;
}





