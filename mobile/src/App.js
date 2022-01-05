import React from 'react';
import './App.css';
import clients from './clients.json';
import MobileCompany from './components/' //довить название

function App() {
  return (
    <MobileCompany clients={clients} name='MTS'/>
  );
}

export default App;
