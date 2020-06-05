import React, { useState, useEffect } from 'react';

import createBrowserHistory from '../histroy';
import Modal from './Modal';

const AddPlayer = () => {
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
