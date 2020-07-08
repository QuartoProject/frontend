import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

const basename = process.env.NODE_ENV === 'development' ? '/' : '/frontend/';

ReactDOM.render(
  <Router basename={basename}>
    <App />
  </Router>,
  document.getElementById('app')
);
