import React from 'react';
import PhotoFavButton from 'components/PhotoFavButton';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss';
import { useFavourites } from 'components/FavouritesContext';

const PhotoDetailsModal = ({  selectedPhoto, closeModal, toggleFavourite }) => {
  const { favourites } = useFavourites();

  const selectCloseModal = () => {
    closeModal();
  };

  return (
    <div className="photo-details-modal">
      {selectedPhoto && (
        <>
          <button className="photo-details-modal__close-button" onClick={selectCloseModal}>
            <img src={closeSymbol} alt="close symbol"/>
          </button>

          <PhotoFavButton
            like={favourites.includes(selectedPhoto)}
            handleClick={() => toggleFavourite(selectedPhoto.id)}
            // handleClick={() => toggleFavourite(selectedPhoto)}
            photo={selectedPhoto}
          />

          <img className="photo-details-modal__image" src={selectedPhoto.urls.regular} alt={selectedPhoto.user.name} />

          <div className="photo-details-modal__photographer-details">
            <img className="photo-details-modal__photographer-profile" src={selectedPhoto.user.profile} alt={selectedPhoto.user.name} />
            <div className="photo-details-modal__user-info">{selectedPhoto.user.name}</div>
          </div>

          <div>{selectedPhoto.location.city}, {selectedPhoto.location.country}</div>
          <div className="photo-details-modal__header">Similar Photos</div>
          <div className="photo-details-modal__images">
            {selectedPhoto.similarPhotos ? <PhotoList photos={Object.values(selectedPhoto.similarPhotos)} /> : null}
        
          </div>
        </>
      )}
    </div>
  );
};

export default PhotoDetailsModal;