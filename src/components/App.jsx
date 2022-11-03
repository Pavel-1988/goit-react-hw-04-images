import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { Container } from './App.styled'
import { ToastContainer } from 'react-toastify';
// import { toast } from 'react-toastify';

import Searchbar  from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery'
import Button  from './Button/Button'
import Loader from './Loader/Loader'
import Modal from './Modal/Modal'



export default function App() {

  const [photoName, setPhotoName] = useState('');
  const [photo, setPhoto] = useState([]);
  const [page, setPage] = useState(1);
  const [currentLargeImageURL, setCurrentLargeImageURL] = useState('');
  const [searchTotal, setSearchTotal] = useState(null);
  const [loader, setLoader] = useState(false);


  useEffect(() => {
    if (!photoName) {
      return
    }

      setLoader(true);
      fetch(
      `https://pixabay.com/api/?q=${photoName}&page=${page}&key=29451917-11054f18e01d02c62ffb7517a&image_type=photo&orientation=horizontal&per_page=12`
    )
     .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error());
      })
       .then(photo => {
          setSearchTotal(photo.total);
          setPhoto(prevState => [...prevState, ...photo.hits])
       })
       .finally(setLoader(false))
  }, [photoName,page])

  useEffect(() => {
    setPhoto([])
  }, [photoName])

  const handlerFormSubmit = photoName => {
    setPhotoName(photoName)
    setPage(1)
  }

  const onOpenModalWithLargeImage = url => {
    setCurrentLargeImageURL(url);
  };

  const onModalClose = () => {
    setCurrentLargeImageURL('');
   };
  

  const hendlerMoreClick = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <Container>
      <ToastContainer autoClose={2000} />
      <Searchbar onSubmit={handlerFormSubmit} page={page} />

      {searchTotal === 0 ? (
        <p className="error">No "{photoName}" image was found</p>
      ) : (
          <ImageGallery photoName={photo} onClick={onOpenModalWithLargeImage} />)
      }

      {loader && <Loader />}
      {currentLargeImageURL && (
        <Modal closeModal={onModalClose} url={currentLargeImageURL} />
      )}
      {searchTotal > 12 && <Button onClick={hendlerMoreClick} />}
    </Container>
  );


}
//=================
// return (
//       <Container>
//         <ToastContainer autoClose={2000} />
//         <SearchBar onSubmit={this.handleFormSubmit} />
//         {status === 'pending' && (
//           <Container>
//             <Loader />
//           </Container>
//         )}

//         {image.length > 0 && (
//           <Container>
//             <ImageGallery images={image} imgAlt={imgName} />
//             {status === 'pending' ? 
//               <Loader />
//              : 
//               <Button onClick={this.loadMore} />
//             }
//           </Container>
//         )}
//       </Container>
//     );