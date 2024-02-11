import React from 'react';
import PhotoFavButton from 'components/PhotoFavButton';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss';
import { useFavourites } from 'components/FavouritesContext';

const PhotoDetailsModal = ({ props }) => {
  const { selectedPhoto, closeModal, toggleFavourite } = props;
  const { favourites } = useFavourites();

  const selectCloseModal = () => {
    closeModal();
  };

  return (
  //workign with the assumption I am passing the data of the selected photo from the array of retunred api data, I will need to check the data structure of the api to confirm this and might have to use selsectedPhoto.id to get the id of the selected photo

    <div className="photo-details-modal">
      {/* <div className="photo-details-modal" onClick={toggleModal}></div> */}
      <button className="photo-details-modal__close-button" onClick={selectCloseModal}>
        <img src={closeSymbol} alt="close symbol"/>
      </button>

      <PhotoFavButton
        like={favourites.includes(selectedPhoto.id)}
        handleClick={() => toggleFavourite(selectedPhoto.id)}
        photo={selectedPhoto}
      />

      <img className="photo-details-modal__image" src={selectedPhoto.urls.regular} alt={selectedPhoto.user.name} />

      <div className="photo-details-modal__photographer-details">
        <img className="photo-details-modal__photographer-profile" src={selectedPhoto.user.profile} alt={selectedPhoto.user.name} />
        <div className="photo-details-modal__user-info">{selectedPhoto.user.name}</div>
      </div>

      <div>{selectedPhoto.location.city}, {selectedPhoto.location.country}</div>

      {/* may have to rewrite this section */}
      <div className="photo-details-modal__header">Similar Photos</div>
      <div className="photo-details-modal__images">
        {selectedPhoto.similarPhotos ? <PhotoList photos={Object.values(selectedPhoto.similarPhotos)} /> : null}
        
      </div>
    </div>
  );
};

export default PhotoDetailsModal;