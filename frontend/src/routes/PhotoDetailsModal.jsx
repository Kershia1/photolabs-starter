import React, { useState, useEffect } from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import { useFavourites } from 'components/FavouritesContext';
import { useAppDataContext, ACTIONS } from 'context/AppDataContext';


/**The ModalPhotoFavButton component is a button that allows users to favorite a photo. It changes its appearance based on whether the photo is already favorited or not. The ModalPhotoFavButton component's handleClick function stops the click event from propagating up to the modal's onClick handler, which would close the modal. It then toggles the favorite status of the photo and toggles the display of an alert. */

const ModalPhotoFavButton = ({ like, handleClick, displayAlert }) => {
  const onClick = (e) => {
    e.stopPropagation();
    handleClick(e);
    console.log('Fav button clicked');
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


/**The PhotoDetailsModal component receives several props, including the details of the photo to be displayed, a function to handle clicks, a function to toggle the favorite status of a photo, a boolean indicating whether the modal is open, an array of photos, and a dispatch function for the application's context.
 
 * The PhotoDetailsModal component uses the useFavourites hook to access the list of favorited photos and a function to set that list.

The PhotoDetailsModal component's onClick handler calls the closeModal function, which dispatches an action to close the modal.
 */

const PhotoDetailsModal = ({photoDetails, toggleFavourite, isModalOpen: isModalOpenProp, photos, dispatch: dispatchProp, handleClick}) => {

  const {favourites, setFavourites} = useFavourites();
  const [displayAlert, setDisplayAlert] = useState(false);
  const { state, dispatch } = useAppDataContext();
  const { isModalOpen, selectedPhoto } = state;

  const { id } = photoDetails;
  // console.log(photoDetails);


  /**The handlePhotoSelect function is used to find the selected photo from the array of photos and dispatch an action to update the application's state with the selected photo's details. */

  const handlePhotoSelect = (id) => {
    const selectedPhoto = photos.find(photo => photo.id === id);
    dispatch({
      type: ACTIONS.DISPLAY_PHOTO_DETAILS,
      payload: {
        isModalOpen: true,
        selectedPhoto: selectedPhoto
      }
    });
  };

  const closeModal = handleClick;

  if (!isModalOpen || !selectedPhoto) {
    return null;
  }


  /*The useEffect hook is used to call the handlePhotoSelect function when the component is mounted. This ensures that the selected photo is displayed when the modal is opened. */

  // Call handlePhotoSelect when the component is mounted
  useEffect(() => {
    handlePhotoSelect(selectedPhoto.id);
  }, [selectedPhoto]);

  return (
    <div className="photo-details-modal" onClick={closeModal}>
      {/* <div className="photo-details-modal" onClick={toggleModal}></div> */}
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
  );
};

export default PhotoDetailsModal;