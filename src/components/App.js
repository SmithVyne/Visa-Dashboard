import React, {useEffect, useState} from 'react';
import '../styles/App.css';
import Header from './Header';
import Body from './Companies';

function App() {
  const [header, setHeader] = useState([]);
  const [companies, setCompanies] = useState([]);
  
  useEffect(() => {
     fetch('./api/headers.json')
     .then(response => response.json())
     .then(data => setHeader(data.data))

     fetch('./api/companies.json')
     .then(response => response.json())
     .then(data => setCompanies(data.data))

  }, [])
  
  return (
    <main>
      <Header header={header} />
      <Body companies={companies} />
    </main>
  );
}

export default App;
