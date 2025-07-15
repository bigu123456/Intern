type InfoItem = {
  id: number;
  name: string;
  age: string;
  city: string;
  number: string;
};

type DemoProps = {
  information: InfoItem[];
  setinformation: React.Dispatch<React.SetStateAction<InfoItem[]>>;
};

const Demo: React.FC<DemoProps> = ({ information, setinformation }) => {
  const update = () => {
    if (information.length === 0) return;

    const updated = information.map((item) =>
      item.id === information[0].id
        ? { ...item, name: "Updated Bigyan", city: "Lalitpur" }
        : item
    );

    setinformation(updated);
  };

  return (
    <>
      <h2>Child Demo</h2>
      <button onClick={update}>Update  Entry</button>
    </>
  );
};

export default Demo;
