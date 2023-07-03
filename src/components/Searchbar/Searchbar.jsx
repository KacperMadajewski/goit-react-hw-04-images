import React, {useState} from 'react';
import css from './Searchbar.module.css';

export function Searchbar() {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  const onSubmit = query => {
    console.log(query);
  };

  const handleChange = e => {
    setQuery(e.target.value );
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.formBtn} type="submit">
          <span className={css.formSpan}>Search</span>
        </button>

        <input
          className={css.formInput}
          type="text"
          placeholder="Search images and photos"
          onChange={handleChange}
          value={query}
        />
      </form>
    </header>
  );
}
