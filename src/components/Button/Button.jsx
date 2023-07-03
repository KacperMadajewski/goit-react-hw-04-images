import React from 'react';
import css from './Button.module.css';

export function Button({ onClick, children, showButton, disabled }) {
  return (
    <button className={css.btn} onClick={onClick} disabled={disabled}>
      {showButton ? children : null}
    </button>
  );
}
