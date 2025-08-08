
import axiosInstance from "./AxiosInstances";



// POST  (uploader)
export const uploader = async (url, payload) => {
  const { data } = await axiosInstance.post(url, payload);
  return data;
};

// PUT  (putUploader)
export const putUploader = async (url, payload) => {
  const { data } = await axiosInstance.put(url, payload);
  return data;
};

// DELETE  (deleteUploader)
export const deleteUploader = async (url) => {
  const { data } = await axiosInstance.delete(url);
  return data;
};

export default {
 
  uploader,
  putUploader,
  deleteUploader,
};
