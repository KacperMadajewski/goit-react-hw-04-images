import React from 'react';
import css from './ImageGalleryItem.module.css';

export function ImageGalleryItem({ item, onClick }) {
  const handleClick = () => {
    onClick(item.largeImageURL);
  };

  return (
    <li className={css.list}>
      <img
        className={css.img}
        src={item.webformatURL}
        alt={item.tags}
        onClick={handleClick}
      />
    </li>
  );
}
