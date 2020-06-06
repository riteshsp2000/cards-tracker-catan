import React, { useState, useEffect } from 'react';

import createBrowserHistory from '../histroy';
import Modal from './Modal';

const AddPlayer = (props) => {
  const [players, setPlayers] = useState(props);

  return (
    <Modal
      title='Delete Stream'
      content='Content'
      actions='aldfkjlakjdslkjalkdsfjlkd'
      onDismiss={() => createBrowserHistory.push('/')}
    />
  );
};

export default AddPlayer;
