import React from 'react';

const ImageGalleryItem = ({ id, src, alt }) => (
  <li className="ImageGalleryItem" key={id}>
    <img src={src} alt={alt[0]} className="ImageGalleryItem-image" />
  </li>
);

export default ImageGalleryItem;
