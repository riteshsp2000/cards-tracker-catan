import React, { useState, useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import createBrowserHistory from '../histroy';
import Home from './Home';
import AddPlayer from './AddPlayer';
import styles from '../css/App.module.css';

const App = () => {
  const [players, setPlayer] = useState([]);
  console.log(players);
  return (
    <Router history={createBrowserHistory}>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/add' exact>
          <AddPlayer {...players} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
