import React from 'react';
import Card from './Card';

const Cards = () => {
  return (
    <div className='ui raised container three column grid'>
      <div className='column'>
        <Card />
      </div>
      <div className='column'>
        <Card />
      </div>
      <div className='column'>
        <Card />
      </div>
    </div>
  );
};

export default Cards;
