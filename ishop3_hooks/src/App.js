import React from 'react';
import ReactDOM from 'react-dom';
import Ishop from './components/Ishop/Ishop';
import itemsArr from './itemsArr.json'

let shopName = 'Магазин спортивной обуви';



function App() {
  return (
    <Ishop
    shop={shopName}
    items={itemsArr}
  />
  )
}


export default App;