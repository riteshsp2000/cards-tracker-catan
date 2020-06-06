import React from 'react';

import styles from '../css/Card.module.css';

const Card = ({ name, numbers }) => {
  const renderIcon = (card, number) => {
    return (
      <div className='item'>
        <div className='ui tiny image'>
          <img src={require(`../img/cards/${card}.svg`)} alt='brick' />
        </div>
        <div className='middle aligned content'>
          <button className='ui button primary'>Add</button>
          <button className='ui button negative'>Remove</button>
        </div>
        <div className={styles.statistic}>
          <h2> {number}</h2>
        </div>
      </div>
    );
  };

  const renderIcons = (numbers) => {
    return (
      <div className='ui items'>
        {renderIcon('card_brick', numbers[0])}
        {renderIcon('card_lumber', numbers[1])}
        {renderIcon('card_wool', numbers[2])}
        {renderIcon('card_grain', numbers[3])}
        {renderIcon('card_ore', numbers[4])}
      </div>
    );
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.playerName}>{name}</h2>
      {renderIcons(numbers)}
    </div>
  );
};

export default Card;
