import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
import { useFavourites } from 'components/FavouritesContext';

//Og PhotoDetailsModal toggleFav added, use fav added as state, obj id for photo details added
const PhotoDetailsModal = ({photoDetails, setPhotoDetails, handleClick, toggleFavourite}) => {
  const {favourites, setFavourites} = useFavourites();
  const { id } = photoDetails;
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

      <PhotoFavButton
        like={favourites.includes(id)}
        handleClick={() => toggleFavourite(id)}
      />

      <img className="photo-details-modal__image" src={photoDetails.urls.regular} alt={photoDetails.user.name} />

      <div className="photo-details-modal__photographer-details">
        <img className="photo-details-modal__photographer-profile" src={photoDetails.user.profile} alt={photoDetails.user.name} />
        <div className="photo-details-modal__user-info">{photoDetails.user.name}</div>
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
