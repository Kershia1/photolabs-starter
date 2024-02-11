import { useReducer, useEffect } from "react";

// Define action types
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',//passing data to state
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_MODAL: 'CLOSE_MODAL'
};

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
  case ACTIONS.FAV_PHOTO_ADDED:
    return { ...state, favourites: [...state.favourites, action.payload.photoId] };
  case ACTIONS.FAV_PHOTO_REMOVED:
    return { ...state, favourites: state.favourites.filter(id => id !== action.payload.photoId) };
  case ACTIONS.SET_PHOTO_DATA:
    return { ...state, photoData: action.payload.data };
  case ACTIONS.SET_TOPIC_DATA:
    return { ...state, topicData: action.payload.data };
  case ACTIONS.SELECT_PHOTO:
    return { ...state, selectedPhoto: action.payload.selectedPhoto, isModalOpen: true};
  case ACTIONS.CLOSE_MODAL:
    return { ...state, selectedPhoto:null, isModalOpen: action.payload.photoDetails };
  default:
    throw new Error(`Unsupported action type: ${action.type}`);
  }
};

const useApplicationData = (photos) => {
  const initialState = {
    photoDetails: null,
    favourites: [],
    isModalOpen: false,
    photoData: [],
    topicData: [],
    selectedPhoto: null
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getAllPhotos = () => {
    fetch(`/api/photos`)
      .then(res => res.json())
      .then((data) => {
        console.log('photoData:',data);
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data});
      });
  };

  useEffect(() => {
    getAllPhotos();
  }, []);

  //Fetch All topics
  useEffect(() => {
    fetch(`/api/topics`)
      .then(res => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data}));
  }, []);

  //Fetch Photos By Topic
  const onLoadTopic = (id) => {
    fetch(`/api/topics/photos/${id}`)
      .then(res => res.json())
      .then((data) => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPIC, payload: data}));
  };

  //open modal
  const toggleModal = (id) => {
    const selectedPhoto = state.photoData.find(photo => photo.id === id);
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { isModalOpen: true } });
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { selectedPhoto } });
  };

  //close modal
  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL, payload: { selectedPhoto: null }});
  };

  //update favourite photo ids NOTE I forgot I have the favourites provider
  // const updateToFavPhotoIds = (photoId) => {
  //   if (state.favourites.includes(photoId)) {
  //     dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { photoId } });
  //   } else {
  //     dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { photoId } });
  //   }
  // };

  return {
    state,
    toggleModal,
    closeModal,
    getAllPhotos,
    onLoadTopic,
    // updateToFavPhotoIds
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
