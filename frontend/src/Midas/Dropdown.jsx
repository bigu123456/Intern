
import { Listcounter } from '../Services/inventoryService'

const Dropdown = () => {
  const {data}=Listcounter();
  console.table(data)
  return (
    <div>Dropdown</div>
  )
}

export default Dropdown