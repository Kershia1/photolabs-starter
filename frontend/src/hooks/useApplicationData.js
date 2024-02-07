import React, { useState } from "react";

const useApplicationData = (photos) => {
  const [photoDetails, setPhotoDetails] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (id) => {
    console.log('toggleModal called with id:', id);
    const selectedPhoto = photos.find(photo => photo.id === id);
    console.log('Selected photo:', selectedPhoto);
    setPhotoDetails(selectedPhoto);
    setIsModalOpen(true);
    // setIsModalOpen(false);
    console.log(toggleModal);
  };


  const toggleFavourite = (photoId) => {
    const newFavourites = favourites.includes(photoId) ? favourites.filter(id => id !== photoId) : [...favourites, photoId];
    setFavourites(newFavourites);
  };

  const onClosePhotoDetailsModal = () => {
    setPhotoDetails(null);
  };

  return {
    photoDetails,
    favourites,
    toggleModal,
    updateToFavPhotoIds: toggleFavourite,
    onClosePhotoDetailsModal,
  };
};


export default useApplicationData;