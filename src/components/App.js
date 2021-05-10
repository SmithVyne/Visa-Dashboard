import React, {useEffect, useState} from 'react';
import '../styles/App.css';
import Header from './Header';
import Body from './Body';

function App() {
  const [header, setHeader] = useState([]);
  
  useEffect(() => {
     fetch('./api/headers.json')
     .then(response => response.json())
     .then(data => setHeader(data.data))
  }, [])
  
  return (
    <main className="App">
      <Header header={header} />
      <Body />
    </main>
  );
}

export default App;
