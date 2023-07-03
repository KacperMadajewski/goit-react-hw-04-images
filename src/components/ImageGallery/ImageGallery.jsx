import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  render() {
    const { items, onItemClick } = this.props;
    return (
      <ul className={css.gallery}>
        {items.map(item => (
          <ImageGalleryItem key={item.id} item={item} onClick={onItemClick} />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  onItemClick: PropTypes.func.isRequired,
};
