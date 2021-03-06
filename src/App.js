import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Context } from './context/RoomContext';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Favoritos from './pages/Favorites';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/favorites" component={Favoritos} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/detail/:id" component={Detail} />
      <Route path="*" component={NoMatch} />
    </Switch>
  );
};

export default App;
