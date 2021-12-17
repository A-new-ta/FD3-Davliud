"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Ishop from './components/Ishop';

let shopName = 'Магазин спортивной обуви';
let itemsArr = require('./itemsArr.json');


ReactDOM.render(
  <Ishop
    shop={shopName}
    items={itemsArr}
  />
  , document.getElementById('container') 
);

