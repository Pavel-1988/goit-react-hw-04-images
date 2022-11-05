import PropTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery ({ photoName, onClick }) {
  return (
    <ImageGalleryList>
      {photoName.map(photo  => (
        <ImageGalleryItem
          key={photo.id}
          photo ={photo}
          onClick={onClick}
        />
      ))}
    </ImageGalleryList>
  );
};


ImageGallery.propTypes = {
	photoName: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
