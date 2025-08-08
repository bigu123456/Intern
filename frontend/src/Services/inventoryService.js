import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { uploader, putUploader, deleteUploader } from "../Axios/Uploader"; 
import { fetcher } from "../Axios/Fetchdata";
import { OnSuccess } from "../Axios/OnSuccess";

// Fetch inventory list with explicit query key for caching
export const useListInventory = (params) => {
  const queryParam = new URLSearchParams(params || {}).toString();
  return useQuery(
    ['inventory', queryParam],
    () => fetcher(`inventory/items?${queryParam}`)
  );
};

// Add new inventory item with cache invalidation after success
export const useAddInventory = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (data) => uploader(`inventory/items`, data),
    {
      onSuccess: (data) => {
        OnSuccess(data);
        // Invalidate inventory list to refetch new data including added item
        queryClient.invalidateQueries(['inventory']);
      },
    }
  );
};

// Edit existing inventory item with cache invalidation after success
export const useEditInventory = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (data) => putUploader(`inventory/items/${data.id}`, data.payload),
    {
      onSuccess: (data) => {
        OnSuccess(data);
        // Invalidate inventory list to refetch updated data
        queryClient.invalidateQueries(['inventory']);
      },
    }
  );
};

// Delete inventory item with cache invalidation after success
export const useDeleteInventory = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (id) => deleteUploader(`inventory/items/${id}`),
    {
      onSuccess: (data) => {
        OnSuccess(data);
        // Invalidate inventory list to remove deleted item from UI
        queryClient.invalidateQueries(['inventory']);
      },
    }
  );
};
