import React, { useReducer, useEffect } from "react";

// Define action types
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

// Define initial state
//Added photos and topics
const initialState = {
  photoDetails: null,
  favourites: [],
  isModalOpen: false,
  photoData: [],
  topicData: []
};

// Define reducer function
function reducer(state, action) {
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
  default:
    throw new Error(`Unsupported action type: ${action.type}`);
  }
}

const useApplicationData = (photos) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleModal = (id) => {
    const selectedPhoto = photos.find(photo => photo.id === id);
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { isModalOpen: true } });
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { selectedPhoto } });
  };

  const toggleFavourite = (photoId) => {
    if (state.favourites.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { photoId } });
    }
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { isModalOpen: false } });
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { selectedPhoto: null } });
  };

  //Api fetch reqs from backend
  /**
   * useEffect(() => {...}) //        no dependancies == on every re-render, run this effect

useEffect(() => {...}, []) //    empty dependancy == only run this effect on the initial (after) render, and never do it again

useEffect(() => {...}, [val]) // dependancies  == when val changes, run this effect, if any other state changes, do not run this effect
   */

  //Fetch all photos, only 1 render never again
  const getAllPhotos = (() => {
    fetch(`/api/photos`)
      .then(res => res.json())
      .then(photoData => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData}));
  }, []);

  //Store All Photo Data
  // useEffect(() => {
  //   getAllPhotos();
  // }, []);

  //Fetch All topics
  useEffect(() => {
    fetch(`/api/topics`)
      .then(res => res.json())
      .then(topicData => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData}));
  }, []);

  //Fetch Photos By Topic
  useEffect(() => {
    if(state.topicData) {
      fetch(`/api/topics/photos/${state.topicData}`
      .then(res => res.json())
      .then(topicData =>dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: topicData}))
    }
  }, [state.topicData]);


  return {
    photoDetails: state.photoDetails,
    favourites: state.favourites,
    toggleModal,
    toggleFavourite,
    onClosePhotoDetailsModal,
    getAllPhotos
  };
};

export default useApplicationData;


// const useApplicationData = (photos) => {
//   const [photoDetails, setPhotoDetails] = useState(null);
//   const [favourites, setFavourites] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const toggleModal = (id) => {
//     console.log('toggleModal called with id:', id);
//     const selectedPhoto = photos.find(photo => photo.id === id);
//     console.log('Selected photo:', selectedPhoto);
//     setPhotoDetails(selectedPhoto);
//     setIsModalOpen(true);
//     // setIsModalOpen(false);
//     console.log(toggleModal);
//   };


//   const toggleFavourite = (photoId) => {
//     const newFavourites = favourites.includes(photoId) ? favourites.filter(id => id !== photoId) : [...favourites, photoId];
//     setFavourites(newFavourites);
//   };

//   const onClosePhotoDetailsModal = () => {
//     setPhotoDetails(null);
//   };

//   return {
//     photoDetails,
//     favourites,
//     toggleModal,
//     updateToFavPhotoIds: toggleFavourite,
//     onClosePhotoDetailsModal,
//   };
// };


// export default useApplicationData;