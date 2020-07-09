import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Context } from './context/themeContext';

import App from './App';

const basename = process.env.NODE_ENV === 'development' ? '/' : '/frontend/';

ReactDOM.render(
  <Context.Provider>
    <Router basename={basename}>
      <App />
    </Router>
  </Context.Provider>,
  document.getElementById('app')
);
