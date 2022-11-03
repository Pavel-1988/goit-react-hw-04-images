import React, {useState } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryListItem } from './ImageGalleryItem.styled';
// import Modal from '../Modal/Modal';

export default function ImageGalleryItem({
  photo: { webformatURL, largeImageURL, imgAlt },
   onClick 
  }) {

    return (
       <ImageGalleryListItem >
        <img
          src={webformatURL}
          alt={imgAlt}
          onClick={() => onClick(largeImageURL)}
        />      
      </ImageGalleryListItem>
    )
}

ImageGalleryItem.propTypes = {
  photo: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};





//====================
// function ImageGalleryItem ({ webformatURL, largeImageURL, imgAlt })  {

//   // state = {
//   //   showModal: false,
//   // };
//   const [showModal, setShowModal] = useState('false');

//   //   toggleModal = () => {
//   //   this.setState(({ showModal }) => ({
//   //     showModal: !showModal,
//   //   }));
//   // };

//     const  toggleModal = () => {
//     setShowModal(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//     return (
//        <ImageGalleryListItem onClick={toggleModal}>
//         <img src={webformatURL} alt={imgAlt} />
//         {showModal && (
//           <Modal onClose={toggleModal}>
//             <img src={largeImageURL} alt={imgAlt} />
//           </Modal>
//         )}
//       </ImageGalleryListItem>
//     )
// }

// ImageGalleryItem.propTypes = {
//   webformatURL: PropTypes.string.isRequired,
//   largeImageURL: PropTypes.string.isRequired,
//   imgAlt: PropTypes.string.isRequired,
// };

// export default ImageGalleryItem;