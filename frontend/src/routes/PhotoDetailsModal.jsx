import React, { useState } from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
import { useFavourites } from 'components/FavouritesContext';

//Og PhotoDetailsModal toggleFav added, use fav added as state, obj id for photo details added basical make a new favicon button with state for modal


const ModalPhotoFavButton = ({ like, handleClick, displayAlert }) => {
  const onClick = (e) => {
    e.stopPropagation();
    handleClick(e);
  };

  return (
    <button className={`photo-fav-button ${like ? 'photo-fav-button--liked' : ''}`} onClick={onClick}>
      <svg width="20" height="17" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill={like ? "#C80000" : "#EEEEEE"} d="M11 18C11 18 1 12.5909 1 6.02273C1 4.8616 1.41649 3.73633 2.17862 2.83838C2.94075 1.94043 4.00143 1.32526 5.1802 1.09755C6.35897 0.869829 7.58301 1.04363 8.64406 1.58938C9.70512 2.13512 10.5376 3.0191 11 4.09092C11.4624 3.0191 12.2949 2.13512 13.3559 1.58938C14.417 1.04363 15.641 0.869829 16.8198 1.09755C17.9986 1.32526 19.0593 1.94043 19.8214 2.83838C20.5835 3.73633 21 4.8616 21 6.02273C21 12.5909 11 18 11 18Z" stroke="#C80000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        {
          !!displayAlert &&
            <circle cx="21" cy="4" r="2.75" fill="#FFFF00" stroke="#C80000" strokeWidth="0.5"/>
        }
      </svg>
    </button>
  );
};

const PhotoDetailsModal = ({photoDetails, setPhotoDetails, handleClick, toggleFavourite}) => {
  const {favourites, setFavourites} = useFavourites();
  //use the context to get the favs and set the favs
  const [isOpen, setIsOpen] = useState(true);
  //if modal is open, set to true, if closed, set to false
  const [displayAlert, setDisplayAlert] = useState(false);

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

  // const handleClickModalFavB = () => {
  //   setIsOpen(!isOpen);
  // };

  //if photoDetails is false, return null as in nothing is displayed
  //if photoDetails is true, return the following
  return isOpen ? (
    <div className="photo-details-modal" onClick={toggleModal}>
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol"/>
      </button>

      <ModalPhotoFavButton
        like={favourites.includes(id)}
        handleClick={(e) =>{
          e.stopPropagation();
          toggleFavourite(id);
          setDisplayAlert(!displayAlert);
        }}
        displayAlert={favourites.includes(id)}
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
        
      </div>
    </div>
  ) : null;
};

export default PhotoDetailsModal;