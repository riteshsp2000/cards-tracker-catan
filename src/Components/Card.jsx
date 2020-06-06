import React, { useState } from 'react';

import styles from '../css/Card.module.css';

const Card = ({ player }) => {
  const [bricks, setBricks] = useState(0);
  const [lumber, setLumber] = useState(0);
  const [wool, setWool] = useState(0);
  const [grain, setGrain] = useState(0);
  const [ore, setOre] = useState(0);
  console.log(player);
  const renderIcon = (card, number, callback) => {
    return (
      <div className='item'>
        <div className='ui tiny image'>
          <img src={require(`../img/cards/${card}.svg`)} alt='brick' />
        </div>
        <div className='middle aligned content'>
          <button
            className='ui button primary'
            onClick={() => callback(number + 1)}
          >
            Add
          </button>
          <button
            className='ui button negative'
            onClick={() => callback(number - 1)}
          >
            Remove
          </button>
        </div>
        <div className={styles.statistic}>
          <h2> {number}</h2>
        </div>
      </div>
    );
  };

  const renderIcons = () => {
    return (
      <div className='ui items'>
        {renderIcon('card_brick', bricks, setBricks)}
        {renderIcon('card_lumber', lumber, setLumber)}
        {renderIcon('card_wool', wool, setWool)}
        {renderIcon('card_grain', grain, setGrain)}
        {renderIcon('card_ore', ore, setOre)}
      </div>
    );
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.playerName}>{player.playerName}</h2>
      {renderIcons()}
    </div>
  );
};

export default Card;
