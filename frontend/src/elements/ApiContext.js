
import  { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";

const ApiContext=createContext();

export const ApiProvider=({children})=>{
  const Query=useQuery({
     queryKey:["todos"],
  queryFn:async()=>{
   const res= await  fetch("https://jsonplaceholder.typicode.com/todos")

   return res.json();
    
   },
  });
 
  

  return (
    <ApiContext.Provider value={Query}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);
