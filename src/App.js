import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Context } from './context/themeContext';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Favoritos from './pages/Favorites';

const App = () => {
  return (
    <Context.Consumer>
      {() => {
        return (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/favorites" component={Favoritos} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/detail" component={Detail} />
            <Route path="*" component={NoMatch} />
          </Switch>
        );
      }}
    </Context.Consumer>
  );
};

export default App;
