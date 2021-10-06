import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem';

export default class ImageGallery extends Component {
  state = {
    images: [],
    // loading: false,
    error: null,
    status: 'resolved',
  };

  componentDidUpdate(prevProps, PrevState) {
    const inputValue = this.props.inputValue;

    if (prevProps.inputValue !== inputValue) {
      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?key=10507999-623e060cae639baa9b9819f90&q=${inputValue}&image_type=photo`,
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject({
            error: new Error(
              `Your request ${inputValue} did not return any results`,
            ),
          });
        })
        // .then(res => res.json())
        .then(images =>
          this.setState({ images: images.hits, status: 'resolved' }),
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  render() {
    const { error, status, images } = this.state;

    // if (status === 'idle') {
    //     return <h1>Что ищем?</h1>;
    // }

    if (status === 'pending') {
      return <h1>Загружаем...</h1>;
    }

    if (status === 'rejected') {
      return <h3>{error.message}</h3>;
    }

    if (status === 'resolved') {
      return (
        <ul className="ImageGallery">
          {images.map(({ id, webformatURL, tags }) => (
            <ImageGalleryItem
              key={id}
              src={webformatURL}
              alt={tags.split(' ')}
            />
          ))}
        </ul>
      );
    }
  }
}
