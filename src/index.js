import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NhostProvider } from '@nhost/react';
import { NhostClient } from '@nhost/react';

// Replace with your Nhost backend URL
const nhost = new NhostClient({
  baseURL: 'https://your-backend-url.nhost.app',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NhostProvider client={nhost}>
      <App />
    </NhostProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

