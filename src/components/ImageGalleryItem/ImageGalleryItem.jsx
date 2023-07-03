import { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  handleClick = () => {
    this.props.onClick(this.props.item.largeImageURL);
  };

  render() {
    const { item } = this.props;
    return (
      <li className={css.list}>
        <img
          className={css.img}
          src={item.webformatURL}
          alt={item.tags}
          onClick={this.handleClick}
        />
      </li>
    );
  }
}
