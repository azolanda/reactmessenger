import { script } from './script';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Routes } from './Routes.jsx';

script();

ReactDOM.render(
   <Routes />,
   document.getElementById('root'),
);


