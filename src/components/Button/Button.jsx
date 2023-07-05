import React from 'react';
import css from './Button.module.css';

export function Button({ onClick, disabled }) {
  return (
    <button className={css.btn} onClick={onClick} disabled={disabled}>
      Load More
    </button>
  );
}
