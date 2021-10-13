import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, onOpen }) => {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem images={images} onToggle={onOpen} />
    </ul>
  );
};
export default ImageGallery;
