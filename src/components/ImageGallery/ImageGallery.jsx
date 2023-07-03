import React from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export function ImageGallery({ items, onItemClick }) {
  return (
    <ul className={css.gallery}>
      {items.map(item => (
        <ImageGalleryItem key={item.id} item={item} onClick={onItemClick} />
      ))}
    </ul>
  );
}
