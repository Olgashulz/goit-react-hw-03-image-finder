import React, { Component } from 'react';

export default class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
  };

  componentDidUpdate(prevProps, PrevState) {
    const inputValue = this.props.inputValue;
    if (prevProps.inputValue !== inputValue) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?key=10507999-623e060cae639baa9b9819f90&q=${inputValue}&image_type=photo`,
      )
        .then(res => res.json())
        .then(images => this.setState({ images: images.hits }))
        .finally(() => this.setState({ loading: false }));
    }
  }
  render() {
    return (
      <ul className="ImageGallery">
        {this.state.loading && <h1>Загружаем...</h1>}
      </ul>
    );
  }
}
