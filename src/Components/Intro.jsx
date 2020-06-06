import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import styles from '../css/Intro.module.css';

const Intro = () => {
  return (
    <div
      className={`ui raised very padded container  ${cx(
        styles.customDiv,
        styles.customDivHeight
      )}`}
      id='customDiv'
    >
      <div className={styles.introHeader}>
        <h2 className={`ui ${styles.introTitle}`}>
          Card Tracker for <br /> Colonist
        </h2>
        <img
          src={require('../img/logo.png')}
          alt='colonist'
          className={styles.headerImage}
        />
      </div>

      <p className={styles.intoPara}>
        This web-app is to track the cards your competitors have in the game of
        Colonist/Catan.(Trust me the game is extremely competitive and
        addictive) Use this app only when the game has become extremely
        competitive and winning at any cost is much necessary. Also use it then
        when you have lost 3 or more matches continuously.
      </p>
      <p className={styles.intoPara}>
        The app can track at most 3 players (coz the 4th player is you and you
        already know your cards. Cmon man?!!?). Also because no one has the paid
        version of adding more than 4 players. Click on the add player button
        after which a dialog box will appear. Fill the required details and then
        click on the add player button. Do this until all the players that you
        want are added and then click on done.
      </p>
      <p className={styles.intoPara}>
        From the layout you obviously would have guessed what to do so I aint
        explaining it. Just a small tip, the settlement, city and devcard button
        at the bottom - click on them when the player uses any of them in the
        game(just some neat tricks to save you some time ;)
      </p>
      <p className={styles.intoPara}>
        The app is opensourced. You can find the code here at{' '}
        <a href='https://github.com/riteshsp2000/cards-tracker-catan'>github</a>
        . I am still a new developer so dont go crazy if you find some bugs.
        Report them at the issues section on the github page. Say hellp at{' '}
        <a href='riteshp2000@gmail.com'>riteshp2000@gmail.com</a>
      </p>

      <div className={styles.button}>
        <Link to='/add' className='ui negative button'>
          Add player
          <i className='caret right icon'></i>
        </Link>
      </div>
    </div>
  );
};

export default Intro;
