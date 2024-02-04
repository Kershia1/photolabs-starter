import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

//Og PhotoDetailsModal
const PhotoDetailsModal = ({photoDetails, setPhotoDetails, handleClick}) => {
  console.log(photoDetails);

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
      <img className="photo-details-modal__image" src={photoDetails.urls.regular} alt={photoDetails.user.username} />

      <div className="photo-details-modal__photographer-details">
        <img className="photo-details-modal__photographer-profile" src={photoDetails.user.profile} alt={photoDetails.user.username} />
        <div className="photo-details-modal__user-info">{photoDetails.user.username}</div>
      </div>

      <div>{photoDetails.location.city}, {photoDetails.location.country}</div>
      <div className="photo-details-modal__header">Similar Photos</div>
      <div className="photo-details-modal__images">
        {photoDetails.similarPhotos ? <PhotoList photos={Object.values(photoDetails.similarPhotos)} /> : null}
        {/* <PhotoList photos={photoDetails.similarPhotos} /> */}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
