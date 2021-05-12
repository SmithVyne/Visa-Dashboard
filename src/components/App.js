import React, {useEffect, useState, createContext} from 'react';
import '../styles/App.css';
import Top from './Top';
import Header from './Header';
import Companies from './Companies';
import {findHeadersIds} from '../utils';

export const employeesContext = createContext({});

function App() {
  const [header, setHeader] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [employees, setEmployees] = useState([]);
  const headerIds = findHeadersIds(header);
  
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
    <>
      <Top />
      <employeesContext.Provider value={{employees, headerIds}}>
        <main>
          <Header header={header} />
          <Companies companies={companies} />
        </main>
      </employeesContext.Provider>
    </>
  );
}

export default App;
