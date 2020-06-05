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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        aperiam iste harum laboriosam possimus ad saepe natus incidunt
        reprehenderit modi.
      </p>
      <p className={styles.intoPara}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi excepturi
        iure corporis officiis quam aperiam voluptas, velit repellendus culpa
        accusantium ex dolorem veritatis doloremque ab neque corrupti obcaecati
        nostrum eos.
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
