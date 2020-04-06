// react
import React from 'react';

// third-party
import axios from 'axios';
import ReactDOM from 'react-dom';

// aplication
import App from './App';

axios.defaults.baseURL = 'https://api.github.com';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
