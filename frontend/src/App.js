import logo from './logo.svg';
import Dashboard from './components/Dashboard.js';
import React, { useState, useContext } from 'react';

export const DataContext = React.createContext([]);
export const IndexContext = React.createContext("");

function App() {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState("");
  return (
    <DataContext.Provider value={[data, setData]}>
      <IndexContext.Provider value={[index, setIndex]}>
        <div className="App">
          <Dashboard />
        </div>
      </IndexContext.Provider>
    </DataContext.Provider>
  );
}

export default App;
