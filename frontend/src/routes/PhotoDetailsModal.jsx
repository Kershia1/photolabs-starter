import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({photoDetails, setPhotoDetails, handleClick}) => {

  const toggleModal = () => {
    handleClick && handleClick();
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setPhotoDetails(false);
  };

  if (!photoDetails) {
    return null;
  }
  //if photoDetails is false, return null as in nothing is displayed

  return (
    <div className="photo-details-modal" onClick={toggleModal}>
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol"/>
      </button>
    </div>
  );
};

export default PhotoDetailsModal;
