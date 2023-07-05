import React from 'react';
import css from './Searchbar.module.css';

export function Searchbar({ forSubmit, forChange, value }) {
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={forSubmit}>
        <button className={css.formBtn} type="submit">
          <span className={css.formSpan}>Search</span>
        </button>

        <input
          className={css.formInput}
          type="text"
          placeholder="Search images and photos"
          onChange={forChange}
          value={value}
        />
      </form>
    </header>
  );
}
