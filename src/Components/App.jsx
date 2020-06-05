import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import createBrowserHistory from '../histroy';
import Home from './Home';
import AddPlayer from './AddPlayer';
import styles from '../css/App.module.css';

const App = () => {
  return (
    <Router history={createBrowserHistory}>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/add' exact component={AddPlayer} />
      </Switch>
    </Router>
  );
};

export default App;
