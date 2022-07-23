import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// TODO: Look for better peer dependency strategy here to avoid pulling in this mammoth lib:
import "./static/fontawesome/css/all.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
