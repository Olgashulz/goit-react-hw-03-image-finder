import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

export default class App extends Component {
  state = {
    inputValue: '',
    images: {},
    loading: false,
  };

  handleSearchSubmit = inputValue => {
    console.log(inputValue);
    this.setState({ inputValue });
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
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery inputValue={this.state.inputValue} />
        <ToastContainer autoClose={2500} />
      </div>
    );
  }
}
