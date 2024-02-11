import React, { useReducer, useEffect } from "react";

// Define action types
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',//passing data to state
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPIC: 'GET_PHOTOS_BY_TOPIC',
  CLOSE_MODAL: 'CLOSE_MODAL'
};

// Define initial state
//Added photos and topics
const initialState = {
  photoDetails: null,
  favourites: [],
  isModalOpen: false,
  photoData: [],
  topicData: [],
  selectedPhoto: null
};

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
  case ACTIONS.FAV_PHOTO_ADDED:
    return { ...state, favourites: [...state.favourites, action.payload.photoId] };
  case ACTIONS.FAV_PHOTO_REMOVED:
    return { ...state, favourites: state.favourites.filter(id => id !== action.payload.photoId) };
  case ACTIONS.SET_PHOTO_DATA:
    return { ...state, photoData: action.payload.photoData };
  case ACTIONS.SET_TOPIC_DATA:
    return { ...state, topicData: action.payload.topicData };
  case ACTIONS.SELECT_PHOTO:
    return { ...state, selectedPhoto: action.payload.selectedPhoto };
  case ACTIONS.DISPLAY_PHOTO_DETAILS:
    return { ...state, isModalOpen: action.payload.isModalOpen };
  case ACTIONS.GET_PHOTOS_BY_TOPIC:
    return { ...state, photoData: action.payload };
  case ACTIONS.CLOSE_MODAL:
    return { ...state, isModalOpen: false };
  default:
    throw new Error(`Unsupported action type: ${action.type}`);
  }
};

const useApplicationData = (photos) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAllPhotos = () => {
    fetch(`/api/photos`)
      .then(res => res.json())
      .then(photoData => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData}));
  };

  //Fetch All topics
  useEffect(() => {
    fetch(`/api/topics`)
      .then(res => res.json())
      .then(topicData => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData}));
  }, []);

  //Fetch Photos By Topic
  const getPhotosByTopic = (id) => {
    fetch(`/api/topics/photos/${id}`)
      .then(res => res.json())
      .then(photoData => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPIC, payload: photoData}));
  };

  //open modal
  const toggleModal = (photo) => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { isModalOpen: true } });
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { selectedPhoto: photo } });
  };

  //close modal
  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  return {
    state,
    photoDetails: state.photoDetails,
    favourites: state.favourites,
    toggleModal,
    closeModal,
    getAllPhotos,
    getPhotosByTopic
  };
};

export default useApplicationData;

//dead code

//Store All Photo Data
// useEffect(() => {
//   getAllPhotos();
// }, []);

// useEffect(() => {
//   if(state.topicData) {
//     fetch(`/api/topics/photos/${state.topicData}`
//     .then(res => res.json())
//     .then(topicData =>dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: topicData}))
//   }
// }, [state.topicData]);

// const toggleModal = (id) => {
//   const selectedPhoto = photos.find(photo => photo.id === id);
//   dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { isModalOpen: true } });
//   dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { selectedPhoto } });
// };

// const toggleFavourite = (photoId) => {
//   if (state.favourites.includes(photoId)) {
//     dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { photoId } });
//   } else {
//     dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { photoId } });
//   }
// };

// const onClosePhotoDetailsModal = () => {
//   dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { isModalOpen: false } });
//   dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { selectedPhoto: null } });
// };
