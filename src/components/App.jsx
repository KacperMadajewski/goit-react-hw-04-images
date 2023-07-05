import React from 'react';
import { useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { searchQuery } from './Services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  const onSubmit = query => {
    console.log(query);
    searchQuery(query, 1)
      .then(response => {
        setImages(response.data.hits);
        setPage(1);
      })
      .catch(error => {
        console.error('Błąd podczas pobierania danych:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const openModal = imageUrl => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const loadMoreImages = () => {
    const nextPage = page + 1;
    setLoading(true);

    searchQuery(query, nextPage)
      .then(response => {
        const newImages = response.data.hits;
        setImages(prevImages => [...prevImages, ...newImages]);
        setPage(nextPage);
      })
      .catch(error => {
        console.error('Błąd podczas pobierania danych:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const showLoadButton = images.length > 0;
  const disableLoadButton = loading || page === -1;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Searchbar
        forSubmit={handleSubmit}
        forChange={handleChange}
        value={query}
      />
      <ImageGallery items={images} onItemClick={openModal} />
      {loading && <Loader />}

      {selectedImage && (
        <Modal isOpen={true} onClose={closeModal} imageUrl={selectedImage} />
      )}
      <Button
        onClick={loadMoreImages}
        showButton={showLoadButton}
        disabled={disableLoadButton}
      >
        Load more
      </Button>
    </div>
  );
};
