import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <Router basename={process.env.REACT_APP_ROUTER_BASE || ''}>
    <App />
  </Router>,
  document.getElementById('app')
);
