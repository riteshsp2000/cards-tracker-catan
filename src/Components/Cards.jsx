import React from 'react';

import Card from './Card';
import styles from '../css/Card.module.css';

const Cards = ({ players }) => {
  const renderCards = players.map((player, index) => {
    return <Card key={player.playerName} player={players[index]} />;
  });

  return (
    <div className='ui container'>
      <div className={styles.cardsContainer}>{renderCards}</div>
    </div>
  );
};

export default Cards;
