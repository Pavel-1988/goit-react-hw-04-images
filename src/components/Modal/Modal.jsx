import React,{ useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Window } from './Modal.styled';
import PropTypes from 'prop-types';


const modalRoot = document.querySelector('#modal-root');

export default function Modal({url, onClose }) {
  
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
    })
    
    return createPortal(
      <Overlay
        onClick={handleBackdropClick}
      >
        <Window>
          <img  src={url} alt="" />
        </Window>
      </Overlay>,
      modalRoot
    );
  }

  
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  url: PropTypes.element.isRequired,
};

