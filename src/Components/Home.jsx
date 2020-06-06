import React from 'react';

import Intro from './Intro';
import Cards from './Cards';
import styles from '../css/Card.module.css';

const Home = ({ players }) => {
  if (players.length === 0) {
    return (
      <div>
        <Intro />
        <div className='ui container'>
          <h1 className={styles.noPlayerContent}>
            No Players Added. Please click on the Add Player button above to
            added the players
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Intro />
      <Cards players={players} />
    </div>
  );
};

export default Home;
