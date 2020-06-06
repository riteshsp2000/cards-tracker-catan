import React, { useState, useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import createBrowserHistory from '../histroy';
import Home from './Home';
import AddPlayer from './AddPlayer';
import styles from '../css/App.module.css';

const App = () => {
  const [players, setPlayer] = useState([]);

  const handlePlayerChange = (players) => {
    setPlayer(players);
  };

  return (
    <Router history={createBrowserHistory}>
      <Switch>
        <Route path='/' exact>
          <Home players={players} />
        </Route>
        <Route path='/add' exact>
          <AddPlayer handlePlayerChange={handlePlayerChange} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
