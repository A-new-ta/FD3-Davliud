import React from 'react';
import Ishop from './components/Ishop';
// import itemsArr from './itemsArr.json';

const shopName = 'Магазин спортивной обуви';


function App() {
  return (
    <Ishop
    shop={shopName}
    // items={itemsArr}
  />
  )
}


export default App;