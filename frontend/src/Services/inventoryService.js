import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { uploader, putUploader, deleteUploader } from "../Axios/Uploader"; 
import { fetcher } from "../Axios/Fetchdata";
import { OnSuccess } from "../Axios/OnSuccess";

const url=process.env.REACT_APP_API_URL
// Fetch inventory counter list
// export const ListInventory = (params) => {
//   return useQuery({
//     queryKey: ['inventoryCounter', params],
//     queryFn: () => fetcher('inventory/get-dropdown/counter', params),
//   });
// };

export const ListInventory = () => {
  console.log("listinventory call");
  return useQuery({
    
    queryKey: ['inventoryCounter'],
    queryFn: () => fetcher(url,'inventory/get-dropdown/counter'),
   
  });
};


// Add new inventory counter
export const useAddInventory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => uploader(`inventory/get-dropdown/counter`, data),
    onSuccess: (data) => {
      OnSuccess(data);
      queryClient.invalidateQueries(['inventoryCounter']);
    },
  });
};

// Edit existing inventory counter
export const useEditInventory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => putUploader(`inventory/get-dropdown/counter/${data.id}`, data.payload),
    onSuccess: (data) => {
      OnSuccess(data);
      queryClient.invalidateQueries(['inventoryCounter']);
    },
  });
};


// Delete inventory counter
export const useDeleteInventory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteUploader(`inventory/get-dropdown/counter/${id}`),
    onSuccess: (data) => {
      OnSuccess(data);
      queryClient.invalidateQueries(['inventoryCounter']);
    },
  });
};


