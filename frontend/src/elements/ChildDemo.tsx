
type ChildDemoProps={
number: number,
setNumber: React.Dispatch<React.SetStateAction<number>>
}
const ChildDemo:React.FC<ChildDemoProps> = ({number, setNumber}) => {

    setNumber(1000);

  return (
    <div>childDemo

        child demo demo
    </div>
  )
}

export default ChildDemo