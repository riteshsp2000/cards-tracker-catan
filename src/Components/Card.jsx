import React from 'react';

import styles from '../css/Card.module.css';

const Card = ({ numbers }) => {
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
        <div class={styles.statistic}>
          <h2> {number}</h2>
        </div>
      </div>
    );
  };

  const renderIcons = () => {
    return (
      <div className='ui items'>
        {renderIcon('card_brick', 5)}
        {renderIcon('card_lumber', 6)}
        {renderIcon('card_wool', 3)}
        {renderIcon('card_grain', 7)}
        {renderIcon('card_ore', 9)}
      </div>
    );
  };

  return <div>{renderIcons()}</div>;
};

export default Card;
