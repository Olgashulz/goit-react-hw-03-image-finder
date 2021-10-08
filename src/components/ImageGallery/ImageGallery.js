import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import ErrorResponse from '../ErrorResponse';
import LoaderFnc from '../Loader';

export default class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    status: 'resolved',
  };

  componentDidUpdate(prevProps, PrevState) {
    const inputValue = this.props.inputValue;

    if (prevProps.inputValue !== inputValue) {
      this.setState({ status: 'pending' });

      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?key=10507999-623e060cae639baa9b9819f90&q=${inputValue}&page=${this.props.page}&image_type=photo`,
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
      }, 200);
    }
  }
  render() {
    const { error, status, images } = this.state;
    const { onOpen } = this.props;

    // if (status === 'idle') {
    //     return <h1>Что ищем?</h1>;
    // }

    if (status === 'pending') {
      return <LoaderFnc />;
    }

    if (status === 'rejected') {
      return <ErrorResponse message={error.message} />;
    }

    if (status === 'resolved') {
      return (
        <ul className="ImageGallery">
          {/* {images.map(({ id, webformatURL, tags, largeImageURL }) => (
            <ImageGalleryItem
              toggle={toggle}
              key={id}
              src={webformatURL}
              modalSrc={largeImageURL}
              alt={tags.split(' ')}
            />
          ))} */}

          <ImageGalleryItem images={images} onToggle={onOpen} />
        </ul>
      );
    }
  }
}
