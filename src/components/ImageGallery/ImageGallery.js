import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import ErrorResponse from '../ErrorResponse';
import LoaderFnc from '../Loader';
import { fetchImages } from '../../servises/app';

export default class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    status: 'resolved',
    // page: 1,
  };

  async componentDidUpdate(prevProps, PrevState) {
    const inputValue = this.props.inputValue;
    const page = this.props.page;

    if (prevProps.inputValue !== inputValue || prevProps.page !== page) {
      try {
        this.setState({ status: 'pending' });
        const gallery = await fetchImages(inputValue, page);

        this.setState({ status: 'resolved' });

        this.setState(prevState => ({
          images: [...prevState.images, ...gallery],
        }));
        this.props.takeImages(this.state.images);
      } catch (error) {
        this.setState({ error, status: 'rejected' });
      }
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
          <ImageGalleryItem images={images} onToggle={onOpen} />
        </ul>
      );
    }
  }
}
