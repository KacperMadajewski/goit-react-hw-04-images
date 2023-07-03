import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { searchQuery } from './Services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import Button from './Button/Button';

export class App extends Component {
  state = {
    query: '',
    loading: false,
    images: [],
    selectedImage: null,
    page: 1,
  };

  handleSearch = query => {
    this.setState({ query, loading: true, images: [], page: 1 });

    searchQuery(query, 1)
      .then(response => {
        this.setState({ images: response.data.hits });
      })
      .catch(error => {
        console.error('Błąd podczas pobierania danych:', error);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  loadMoreImages = () => {
    const { query, page } = this.state;
    const nextPage = page + 1;
    this.setState({ loading: true });

    searchQuery(query, nextPage)
      .then(response => {
        const newImages = response.data.hits;
        this.setState(prevState => ({
          images: [...prevState.images, ...newImages],
          page: nextPage,
        }));
      })
      .catch(error => {
        console.error('Błąd podczas pobierania danych:', error);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  openModal = imageUrl => {
    this.setState({ selectedImage: imageUrl });
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { loading, images, selectedImage, page } = this.state;
    const showLoadButton = images.length > 0;
    const disableLoadButton = loading || page === -1;
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery items={images} onItemClick={this.openModal} />
        {loading && <Loader />}

        {selectedImage && (
          <Modal
            isOpen={true}
            onClose={this.closeModal}
            imageUrl={selectedImage}
          />
        )}
        <Button
          onClick={this.loadMoreImages}
          showButton={showLoadButton}
          disabled={disableLoadButton}
        >
          Load more
        </Button>
      </div>
    );
  }
}





export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
