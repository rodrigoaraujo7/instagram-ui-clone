import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import AccountInfos from './components/AccountInfos';
import Photos from  './components/Photos';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <AccountInfos />
    <hr />
    <Photos />
  </React.StrictMode>,
  document.getElementById('root')
);