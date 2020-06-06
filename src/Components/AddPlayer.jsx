import React, { useState } from 'react';

import createBrowserHistory from '../histroy';
import Modal from './Modal';

let playerList = [];

const AddPlayer = ({ handlePlayerChange }) => {
  const [playerName, setPlayerName] = useState('');
  const [color, setColor] = useState('');

  const handleDone = () => {
    handlePlayerChange(playerList);
    createBrowserHistory.push('/');
  };

  const handleAddPlayer = () => {
    playerList.push({
      playerName,
      color,
    });

    setPlayerName('');
    setColor('');
  };

  const renderActions = () => {
    if (playerList.length === 0) {
      return (
        <React.Fragment>
          <button
            className='ui button primary'
            onClick={() => handleAddPlayer()}
          >
            Add Player
          </button>
          <button
            className='ui button negative'
            onClick={() => handleDone()}
            disabled
          >
            Done
          </button>
        </React.Fragment>
      );
    }

    if (playerList.length === 3) {
      return (
        <React.Fragment>
          <button
            className='ui button primary'
            onClick={() => handleAddPlayer()}
            disabled
          >
            Add Player
          </button>
          <button className='ui button negative' onClick={() => handleDone()}>
            Done
          </button>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <button className='ui button primary' onClick={() => handleAddPlayer()}>
          Add Player
        </button>
        <button className='ui button negative' onClick={() => handleDone()}>
          Done
        </button>
      </React.Fragment>
    );
  };

  const renderContent = () => {
    return 'Add the name and the color of the player. Maximum 3 players can be added';
  };

  const renderInputDetails = () => {
    return (
      <div>
        <div className='ui input fluid'>
          <input
            type='text'
            placeholder='Player Name'
            value={playerName}
            onChange={(event) => setPlayerName(event.target.value)}
          />
        </div>
        <select
          className='ui dropdown fluid'
          onChange={(event) => setColor(event.target.value)}
          value={color}
        >
          <option>Select a Color</option>
          <option value='Red'>Red</option>
          <option value='Blue'>Blue</option>
          <option value='Orange'>Orange</option>
          <option value='Green'>Green</option>
          <option value='Black'>Black</option>
          <option value='Settler'>Settler</option>
          <option value='Colonist'>Colonist</option>
          <option value='Founder'>Founder</option>
        </select>
      </div>
    );
  };

  return (
    <Modal
      title='Add a player'
      content={renderContent()}
      input={renderInputDetails()}
      actions={renderActions()}
      onDismiss={() => createBrowserHistory.push('/')}
    />
  );
};

export default AddPlayer;
