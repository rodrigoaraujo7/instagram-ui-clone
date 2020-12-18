import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import AccountInfos from './components/AccountInfos';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <AccountInfos />
  </React.StrictMode>,
  document.getElementById('root')
);