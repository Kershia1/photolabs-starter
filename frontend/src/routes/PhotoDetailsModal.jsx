import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import { useState } from 'react';

const PhotoDetailsModal = ({photoDetails, handleClick}) => {
  // const [photoDetails, setPhotoDetails] = useState(false);
  //handles state of clicked modal and close button

  const toggleModal = () => {
    handleClick && handleClick();
  };

  // const closeModal = (e) => {
  //   e.stopPropagation();
  // };

  if (!photoDetails) {
    return null;
  }
  //if photoDetails is false, return null as in nothing is displayed

  return (
    <div className="photo-details-modal" onClick={toggleModal}>
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  );
};

export default PhotoDetailsModal;
