import React, { useState } from 'react';
import InputPage from './components/InputPage';
import DisplayPage from './components/DisplayPage';
import axios from 'axios';

function App() {
  const [jsonData, setJsonData] = useState(null);
  const [page, setPage] = useState('input');

  const fetchDataFromBackend = async (companyName) => {
    try {
      const response = await axios.post('http://localhost:3000/data', {
        companyName: companyName,
      });
      setJsonData(response.data);
      console.log(response);
      setPage('display');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const resetPage = () => {
    setPage('input');
  };

  return (
    <div>
      {page === 'input' && (
        <InputPage fetchDataFromBackend={fetchDataFromBackend} />
      )}
      {page === 'display' && (
        <DisplayPage jsonData={jsonData} resetPage={resetPage} />
      )}
    </div>
  );
}

export default App;
