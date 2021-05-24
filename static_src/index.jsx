import { script } from './script';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import { Routes } from './Routes.jsx';
import { store } from './store/index';


script();

ReactDOM.render(
   <Provider store={store}>
      <Routes />
   </Provider>,
   document.getElementById('root'),
);


