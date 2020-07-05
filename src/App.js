import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NoMatch from './pages/NoMatch';
import Favoritos from './pages/Favoritos';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/favoritos" component={Favoritos} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="*" component={NoMatch} />
    </Switch>
  );
};

export default App;
