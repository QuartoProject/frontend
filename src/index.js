import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Provider from './context/RoomContext';

import App from './App';

const basename = process.env.NODE_ENV === 'development' ? '/' : '/frontend/';

ReactDOM.render(
  <Provider>
    <Router basename={basename}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);
