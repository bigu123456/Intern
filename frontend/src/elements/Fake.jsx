import React, { useEffect, useState } from 'react';
import axiosInstance from '../Axios/AxiosInstances';

function Fake() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axiosInstance.get('/inventory/get-dropdown/counter')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.error('API error:', err);
      });
  }, []);

  return (
    <div>
      <h1>API Data</h1>
      <pre>{data ? JSON.stringify(data, null, 2) : 'Loading...'}</pre>
    </div>
  );
}

export default Fake;
