import React from 'react';

// const ImageGalleryItem = ({ id, src, alt, modalSrc, toggle }) => (
//   <li className="ImageGalleryItem" key={id}>
//     <img src={src} alt={alt[0]} className="ImageGalleryItem-image" onClick={() => toggle(modalSrc)} />
//   </li>
// );

const ImageGalleryItem = ({ onToggle, images }) => {
  return (
    <>
      {images.map(item => {
        return (
          <li
            onClick={() => onToggle(item.largeImageURL)}
            className="ImageGalleryItem"
            key={item.id}
          >
            <img
              src={item.webformatURL}
              alt={item.tags}
              className="ImageGalleryItem-image"
              data-largeimage={item.largeImageURL}
            />
          </li>
        );
      })}
    </>
  );
};

export default ImageGalleryItem;
