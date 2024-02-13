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

const useApplicationData = () => {
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
    fetch(`http://localhost:8001/api/photos`)
      .then(res => res.json())
      .then((data) => {
        // console.log('photoData:',data);
        //disptach data to match reducer
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { data } });
        //dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data}); //disptach's whole data obj to state
      });
  };

  useEffect(() => {
    getAllPhotos();
  }, []);

  //Fetch All topics
  useEffect(() => {
    fetch(`http://localhost:8001/api/topics`)
      .then(res => res.json())
      .then((data) => {
        // console.log('topicData:', data); // Log the data received from the API
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { data } });
      })
      .catch((error) => {
        console.error('Error fetching topics:', error); // Log any errors that occur during the fetch
      });
  }, []);

  //Fetch Photos By Topic
  const onLoadTopic = (id) => {
    fetch(`http://localhost:8001/api/topics${id}`)
      .then(res => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data}));
  };

  //open modal
  const onPhotoSelect = (photo) => {
    // const selectedPhoto = state.photoData.find(photo => photo.id === id);
    // dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { isModalOpen: true } });
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { selectedPhoto: photo } });
  };

  //close modal
  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL, payload: { selectedPhoto: null }});
  };

  return {
    state,
    onPhotoSelect,
    closeModal,
    getAllPhotos,
    onLoadTopic,
  };
};

export default useApplicationData;