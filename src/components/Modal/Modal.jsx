import React from 'react';
import { useEffect } from 'react';
import css from './Modal.module.css';

export function Modal({ imageUrl, onClose }) {
  const handleClose = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return document.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <div className={css.overlay} onClick={handleClose}>
      <div className={css.modal}>
        <img src={imageUrl} alt="Modal" />
      </div>
    </div>
  );
}
