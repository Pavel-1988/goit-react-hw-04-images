
import PropTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';



export default function ImageGallery ({ photoName, onClick  }) {
  return (
    <ImageGalleryList>
      {photoName.map(photo  => (
        <ImageGalleryItem
          key={image.id}
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



//============================================================


// const ImageGallery = ({ images, imgAlt }) => {
//   return (
//     <ImageGalleryList>
//       {images.map(({ webformatURL, id, largeImageURL }) => (
//         <ImageGalleryItem
//           key={id}
//           webformatURL={webformatURL}
//           largeImageURL={largeImageURL}
//           imgAlt={imgAlt}
//         />
//       ))}
//     </ImageGalleryList>
//   );
// };

// ImageGallery.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       webformatURL: PropTypes.string.isRequired,
//       largeImageURL: PropTypes.string.isRequired,
//       // imgAlt: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   imgAlt: PropTypes.string.isRequired,
// };

// export default ImageGallery;