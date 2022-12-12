import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';

export const Api = axios.create({
  baseURL: process.env.REACT_APP_BASEURL
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
  );
  root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

