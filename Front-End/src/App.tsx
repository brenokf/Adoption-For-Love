import React from 'react';
import { Route } from 'react-router';
import { Router, Switch } from 'react-router-dom';
import history from './history';

import Login from './pages/Login';

function App() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
