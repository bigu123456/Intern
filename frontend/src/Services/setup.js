import { useQuery, useQueryClient } from "@tanstack/react-query";
import fetcher from "axios/Fetcher";
import queryKeys from "queryKeys";
import { useMutation } from "@tanstack/react-query";
import { uploader } from "axios/Uoploader";
import { OnSuccess } from "axios/OnSuccess";
export const useGetPurchaseStore = () => {
  return useQuery([queryKeys.inventory.purchaseReturn.purchaseStore], () =>
     fetcher(inventory/get-dropdown/counter));
};

export const useGetSupplierName = () => {
  return useQuery([queryKeys.inventory.purchaseReturn.supplierName], () => 
    fetcher(inventory/get-dropdown/supplier));
};



export const useDataSupplier = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      return uploader(/inventory/purchase/load-data-using-supplier, payload);
    },
    onSuccess: (res) => {
      OnSuccess(res);
      queryClient.invalidateQueries({ queryKey: ["loadDataSupplier"] });
    },
   
  });
};

export const usePurchaseReturnMaster = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      return uploader();
    },
    onSuccess: (res) => {
      OnSuccess(res);
      queryClient.invalidateQueries({ queryKey: ["loadDataSupplier"] });
    },
    
  });
};