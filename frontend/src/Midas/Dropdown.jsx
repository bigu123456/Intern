import { Button } from "antd";
import { useListInventory,useDeleteInventory } from "../Services/inventoryService";


const Dropdown = () => {
 
  const { data, isLoading } = useListInventory();


  const deleteMutation = useDeleteInventory();


  const handleDelete = (id) => {
    deleteMutation.mutate(id, {
      onSuccess: () => {
       
      },
      onError: (error) => {
        console.error("Delete failed:", error);
      },
    });
  };

  if (isLoading) return <p>Loading...</p>;

  return (
  <>
  <div>
    <h1>{data}</h1>
    <Button type="primary" onClick={handleDelete}></Button>
  </div>
  
  </>
  )
}

      

export default Dropdown;
