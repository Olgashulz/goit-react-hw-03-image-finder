import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';

export default class App extends Component {
  state = {
    inputValue: '',
    images: [],
    page: 1,
    showModal: false,
  };

  handleSearchSubmit = inputValue => {
    console.log(inputValue);
    this.setState({ images: [] });
    this.setState({ inputValue });
  };

  takeImages = images => {
    // console.log(images);
    this.setState({ images: [...images] });
  };

  removeImages = () => {
    this.setState({ images: [] });
  };

  onLoadMore = event => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    this.handleSearchSubmit(this.state.inputValue);
  };

  toggleModal = largeImage => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    this.setState({ largeImage: largeImage });
  };

  render() {
    const { inputValue, showModal, largeImage, page } = this.state;
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <Searchbar
          onSubmit={this.handleSearchSubmit}
          removeImages={this.removeImages}
        />
        <ImageGallery
          inputValue={inputValue}
          onOpen={this.toggleModal}
          page={page}
          takeImages={this.takeImages}
        />
        {this.state.images.length > 0 && (
          <Button onLoadMore={this.onLoadMore} />
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImage} alt={inputValue} />
          </Modal>
        )}

        <ToastContainer autoClose={2500} />
      </div>
    );
  }
}
