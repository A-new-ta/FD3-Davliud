"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import Ishop from './components/Ishop/Ishop';
import itemsArr from './itemsArr.json'

let shopName = 'Магазин спортивной обуви';
// let itemsArr = require('./itemsArr.json');


ReactDOM.render(
  
  <Ishop
    shop={shopName}
    items={itemsArr}
  />
  , document.getElementById('container') 
);

