import React from 'react';
import './App.css';
import Header from './components/Header';
import AccountInfos from './components/AccountInfos';
import Photos from './components/Photos';

export default () => {
  return (
    <React.StrictMode>
      <Header />
      <AccountInfos />
      <hr />
      <Photos />

      <footer>
        <h1>Developed by Rodrigo Araujo</h1>
        <h2><img src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg" alt="Github logo" />/rodrigoaraujo7</h2>
      </footer>
    </React.StrictMode>
  )
};