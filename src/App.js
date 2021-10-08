import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';

export default class App extends Component {
  state = {
    inputValue: '',
    image: {},
    page: 1,
    showModal: false,
    largeImage: null,
    alt: null,
  };

  handleSearchSubmit = inputValue => {
    console.log(inputValue);
    this.setState({ inputValue });
  };

  onLoadMore = event => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    this.handleSearchSubmit(this.state.inputValue);
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    // this.setState({ largeImage: event.target.attributes['data-largeimage'].value })
    // this.takeModalImage(event);
  };

  takeModalImage = event => {
    if (!event.target) {
      return;
    } else {
      this.setState({
        largeImage: event.target.attributes['data-largeimage'].value,
      });
    }

    console.log(event.target.attributes);
    this.toggleModal();
  };

  // componentDidMount() {
  //     // fetch('https://pixabay.com/api/?key=10507999-623e060cae639baa9b9819f90&q=flowers&image_type=photo')
  //     //     .then(res => res.json())
  //     //     .then(console.log);

  //     this.setState({ loading: true })
  //   fetch('https://pixabay.com/api/?key=10507999-623e060cae639baa9b9819f90&q=flowers&image_type=photo')
  //       .then(res => res.json())
  //       .then(image => this.setState({ image }))
  //       .finally(() => this.setState({ loading: false }));

  // }
  render() {
    const { inputValue, showModal, largeImage, page } = this.state;
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery
          inputValue={inputValue}
          onOpen={this.takeModalImage}
          page={page}
        />
        <Button onLoadMore={this.onLoadMore} />
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
