import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { uploader, putUploader, deleteUploader } from "../Axios/Uploader"; 
import { fetcher } from "../Axios/Fetchdata";
import { OnSuccess } from "../Axios/OnSuccess";




// const url = process.env.REACT_APP_API_URL;

export const ListInventory = () => {

  return useQuery({
    queryKey: ['inventoryCounter'],
    queryFn: () => fetcher('get-dropdown/supplier'),
  });
};
// patients-morbality

export const Report = () => {
  const fromDate = '2002-01-01';
  const toDate = '2082-01-28';

  return useQuery({
    queryKey: ['inpatientMorbidity', fromDate, toDate], 
    queryFn: () => fetcher("/api/v1/reports/inpatient-morbidity", {
      from: fromDate,
      to: toDate
    })
  });
};
//Hospital-Morbility

export const Hospitals = () => {
  const fromDate = '2080-01-01';
  const toDate = '2082-01-28';

  return useQuery({
    queryKey: ['HospitalMorbidity', fromDate, toDate], 
    queryFn: () => fetcher("/api/v1/reports/hospital-mortality", {
      from: fromDate,
      to: toDate
    })
  });
};

// Common
export const Common = () => {
  const fromDate = '2080-01-01';
  const toDate = '2082-05-28';

  return useQuery({
    queryKey: ['HospitalMorbidity', fromDate, toDate], 
    queryFn: () => fetcher("/api/v1/reports/emergency-diseases", {
      from: fromDate,
      to: toDate
    })
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