import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [message, setMessage] = useState('');

 const users = [
  { id: 1, name: "Alice", age: 25, city: "Kathmandu" },
  { id: 2, name: "Bob", age: 30, city: "Pokhara" },
  { id: 3, name: "Charlie", age: 28, city: "Lalitpur" },
  { id: 4, name: "David", age: 22, city: "Bhaktapur" },
  { id: 5, name: "Eve", age: 35, city: "Butwal" },
  { id: 6, name: "Frank", age: 26, city: "Biratnagar" },
  { id: 7, name: "Grace", age: 27, city: "Dharan" },
  { id: 8, name: "Heidi", age: 29, city: "Hetauda" },
  { id: 9, name: "Ivan", age: 31, city: "Janakpur" },
  { id: 10, name: "Judy", age: 24, city: "Nepalgunj" },
  {id:11,name:"Bigyan", age:23,city:"morang"},
    
];
const handleMessage = (data) => {
    setMessage(data);
  };

  return (
    <>
    
      <Child persons={users} message={handleMessage} />
        <h2>Message from Child: {message}</h2>
    </>
  );
};

export default Parent;