import React from 'react';
import './App.css';
import clients from './clients.json';
import MobileCompany from './components/MobileCompany/MobileCompany'

function App() {
  let companyName = 'MTS'
  return (
    <MobileCompany clients={clients} name={companyName}/>
  );
}

export default App;
