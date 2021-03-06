import React from 'react';
import ReactDOM from 'react-dom';

import styles from '../css/Modal.module.css';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      onClick={props.onDismiss}
      className={`ui dimmer modals visible active ${styles.Modal}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='ui standard modal visible active'
      >
        <div className='header'>{props.title}</div>
        <div className='content' id={styles.modalFontColor}>
          {props.content}
        </div>
        <div className='content'>{props.input}</div>
        <div className='actions'>{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
