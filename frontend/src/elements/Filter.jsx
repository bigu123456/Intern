import { Search as SearchIcon } from 'lucide-react'; 
import React, { useState } from 'react';

const Filter = () => {
  const [search, setSearch] = useState("");

  const array = [
    { id: 1, name: "Bigyan" },
    { id: 2, name: "Bishal" }, 
    { id: 3, name: 'Ujwal' }
  ];

  const filteredArray = array.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <SearchIcon className="w-5 h-5 mr-2" />
        <input
          className="border p-2 rounded"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <ul>
        {filteredArray.length > 0 ? (
          filteredArray.map(item => (
            <li key={item.id}>{item.name}</li> // Added key
          ))
        ) : (
          <li>No matches found</li>
        )}
      </ul>
    </div>
  );
};

export default Filter;
