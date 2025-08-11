
import { ListInventory } from '../Services/inventoryService'

const Tokendata = () => {
    const {data}=ListInventory();
    console.log(data)
  return (
   <>
   <div>
    <h1>data fetching from api</h1>
   </div>
   
   </>
  )
}

export default Tokendata
