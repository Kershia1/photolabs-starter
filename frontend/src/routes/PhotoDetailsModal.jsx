import React from 'react';
import PhotoFavButton from 'components/PhotoFavButton';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss';
import { useFavourites } from 'components/FavouritesContext';

const PhotoDetailsModal = ({ photos, selectedPhoto, closeModal, onPhotoSelect }) => {
  const { favourites, toggleFavourite } = useFavourites();
  //to toggle the favourite button and add to the favourites list

  const selectCloseModal = () => {
    closeModal();
  };

  return (
    selectedPhoto && (
      <div className="photo-details-modal">
        {/* close button */}
        <button className="photo-details-modal__close-button">
          <img src={closeSymbol} alt="close symbol" onClick={selectCloseModal} />
        </button>
        {/* the photo */}
        <div className="photo-details-modal__images">
          <PhotoFavButton
            photo={selectedPhoto}
            onFavClick={() => toggleFavourite(selectedPhoto.id)}
            like={favourites.includes(selectedPhoto.id)}
          />
          <img
            src={selectedPhoto.urls.full}
            alt="Image"
            className="photo-details-modal__image"
          />
          {/* photographer details */}
          <div className="photo-details-modal__photographer-details">
            <img
              src={selectedPhoto.user.profile}
              alt="Photographer"
              className="photo-details-modal__photographer-profile"
            />
            <div className="photo-details-modal__photographer-info">
              <div className="photo-details-modal__photographer-name">
                {selectedPhoto.user.name}
              </div>
              <div className="photo-details-modal__photographer-location">
                {selectedPhoto.location.city}, {selectedPhoto.location.country}
              </div>
            </div>
          </div>
        </div>
  
        {/* similar images */}
        <div className="photo-details-modal__images">
          <h2 className="photo-details-modal__header">Similar Photos</h2>
        </div>
        {photos && (
          <PhotoList
            photos={photos}
            onPhotoSelect={onPhotoSelect}
          />
        )}
      </div>
    )
  );
};

export default PhotoDetailsModal;