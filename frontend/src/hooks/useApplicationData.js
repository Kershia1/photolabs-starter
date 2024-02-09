/* eslint-disable func-style */
import React, { useContext } from "react";
import { useAppDataContext, ACTIONS } from "context/AppDataContext";



export const useApplicationData = () => {
  const { state, dispatch } = useAppDataContext;

  const updateToFavPhotoIds = photoId => dispatch({type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId});

  const setPhotoSelected = photo => dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });

  const onClosePhotoDetailsModal = () => dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: {isModalOpen: false} });

  const toggleModal = () => dispatch({ type: ACTIONS.TOGGLE_MODAL });

  return {
    state,
    photoDetails: state.photoDetails,
    favourites: state.favourites,
    toggleModal,
    onClosePhotoDetailsModal,
    updateToFavPhotoIds,
    setPhotoSelected
  };
};
//still need to add the implemetation for these functions.