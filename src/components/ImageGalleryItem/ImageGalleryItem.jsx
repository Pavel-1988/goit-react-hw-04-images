import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryListItem } from './ImageGalleryItem.styled';


export default function ImageGalleryItem({
  photo: { webformatURL, largeImageURL, tags },
   onClick 
  }) {

    return (
       <ImageGalleryListItem >
        <img
          src={webformatURL}
          alt={tags}
          onClick={() => onClick(largeImageURL)}
        />      
      </ImageGalleryListItem>
    )
}

ImageGalleryItem.propTypes = {
  photo: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};



