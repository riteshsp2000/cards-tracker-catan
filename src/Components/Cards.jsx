import React from 'react';
import Card from './Card';

import styles from '../css/Card.module.css';

const Cards = ({ players }) => {
  return (
    <div className='ui container'>
      <div className={styles.cardsContainer}>
        <Card name={'Ritesh'} numbers={[1, 2, 3, 4, 5]} />
        <Card name={'Ritesh'} numbers={[1, 2, 3, 4, 5]} />
        <Card name={'Ritesh'} numbers={[1, 2, 3, 4, 5]} />
      </div>
    </div>
  );
};

export default Cards;
