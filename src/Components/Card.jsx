import React, { useState } from 'react';

import styles from '../css/Card.module.css';

const Card = ({ player }) => {
  const [bricks, setBricks] = useState(0);
  const [lumber, setLumber] = useState(0);
  const [wool, setWool] = useState(0);
  const [grain, setGrain] = useState(0);
  const [ore, setOre] = useState(0);

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

  const renderTitleIcon = () => {
    switch (player.color) {
      case 'Red':
        return (
          <img
            className={styles.titleImage}
            src={require('../img/icons/player_bg_red.svg')}
            alt='Red'
          />
        );
      case 'Blue':
        return (
          <img
            className={styles.titleImage}
            src={require('../img/icons/player_bg_blue.svg')}
            alt='Blue'
          />
        );
      case 'Orange':
        return (
          <img
            className={styles.titleImage}
            src={require('../img/icons/player_bg_orange.svg')}
            alt='Orange'
          />
        );
      case 'Green':
        return (
          <img
            className={styles.titleImage}
            src={require('../img/icons/player_bg_green.svg')}
            alt='Green'
          />
        );
      case 'Black':
        return (
          <img
            className={styles.titleImage}
            src={require('../img/icons/player_bg_black.svg')}
            alt='Black'
          />
        );
      default:
        return (
          <img
            className={styles.titleImage}
            src={require('../img/icons/player_bg_settler.svg')}
            alt='Settler'
          />
        );
    }
  };

  const renderCities = () => {
    switch (player.color) {
      case 'Red':
        return (
          <div className={styles.citiesDiv}>
            <img
              className={styles.titleImage}
              src={require('../img/city/city_red.svg')}
              alt='Red'
            />
            <img
              className={styles.titleImage}
              src={require('../img/settlement/settlement_red.svg')}
              alt='Red'
            />
            <img
              className={styles.titleImage}
              src={require('../img/devcard.svg')}
              alt='Red'
            />
          </div>
        );
      case 'Blue':
        return (
          <div className={styles.citiesDiv}>
            <img
              className={styles.titleImage}
              src={require('../img/city/city_blue.svg')}
              alt='Red'
            />
            <img
              className={styles.titleImage}
              src={require('../img/settlement/settlement_blue.svg')}
              alt='Red'
            />
            <img
              className={styles.titleImage}
              src={require('../img/devcard.svg')}
              alt='Red'
            />
          </div>
        );
      case 'Orange':
        return (
          <div className={styles.citiesDiv}>
            <img
              className={styles.titleImage}
              src={require('../img/city/city_orange.svg')}
              alt='Red'
            />
            <img
              className={styles.titleImage}
              src={require('../img/settlement/settlement_orange.svg')}
              alt='Red'
            />
            <img
              className={styles.titleImage}
              src={require('../img/devcard.svg')}
              alt='Red'
            />
          </div>
        );
      case 'Green':
        return (
          <div className={styles.citiesDiv}>
            <img
              className={styles.titleImage}
              src={require('../img/city/city_green.svg')}
              alt='Red'
            />
            <img
              className={styles.titleImage}
              src={require('../img/settlement/settlement_green.svg')}
              alt='Red'
            />
            <img
              className={styles.titleImage}
              src={require('../img/devcard.svg')}
              alt='Red'
            />
          </div>
        );
      case 'Black':
        return (
          <div className={styles.citiesDiv}>
            <img
              className={styles.titleImage}
              src={require('../img/city/city_black.svg')}
              alt='Red'
            />
            <img
              className={styles.titleImage}
              src={require('../img/settlement/settlement_black.svg')}
              alt='Red'
            />
            <img
              className={styles.titleImage}
              src={require('../img/devcard.svg')}
              alt='Red'
            />
          </div>
        );
      default:
        return (
          <div className={styles.citiesDiv}>
            <img
              className={styles.titleImage}
              src={require('../img/city/city_settler.svg')}
              alt='Red'
            />
            <img
              className={styles.titleImage}
              src={require('../img/settlement/settlement_settler.svg')}
              alt='Red'
            />
            <img
              className={styles.titleImage}
              src={require('../img/devcard.svg')}
              alt='Red'
            />
          </div>
        );
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.titleDiv}>
        {renderTitleIcon()}
        <span>
          <h2 className={styles.playerName}>{player.playerName}</h2>
        </span>
      </div>
      {renderIcons()}
      {renderCities()}
    </div>
  );
};

export default Card;
