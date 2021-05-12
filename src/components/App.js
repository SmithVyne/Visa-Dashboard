import React, {useEffect, useState, createContext} from 'react';
import '../styles/App.css';
import Header from './Header';
import Body from './Companies';
import {findHeadersIds} from '../utils';

export const employeesContext = createContext({});

function App() {
  const [header, setHeader] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [employees, setEmployees] = useState([]);
  const headerIds = findHeadersIds(header);
  console.log(headerIds)
  
  useEffect(() => {
     fetch('./api/headers.json')
     .then(response => response.json())
     .then(({data}) => setHeader(data))

     fetch('./api/companies.json')
     .then(response => response.json())
     .then(({data}) => setCompanies(data))

     fetch('./api/employees.json')
      .then(response => response.json())
      .then(({data}) => setEmployees(data)) 

  }, [])
  
  return (
    <employeesContext.Provider value={{employees, headerIds}}>
      <main>
        <Header header={header} />
        <Body companies={companies} />
      </main>
    </employeesContext.Provider>
  );
}

export default App;
