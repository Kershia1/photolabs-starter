// import React, { useReducer, useEffect, createContext, useContext } from "react";

// export const ACTIONS = {
//   FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
//   FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
//   SET_PHOTO_DATA: 'SET_PHOTO_DATA',
//   SET_TOPIC_DATA: 'SET_TOPIC_DATA',
//   SELECT_PHOTO: 'SELECT_PHOTO',
//   DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
//   CLOSE_PHOTO_DETAILS: 'CLOSE_PHOTO_DETAILS',
//   TOGGLE_MODAL: 'TOGGLE_MODAL',
//   ON_TOPIC_SELECT: 'ON_TOPIC_SELECT'
// };

// const initialState = {
//   photoDetails: null,
//   favourites: [],
//   isModalOpen: false,
//   photoData: [],
//   topicData: [],
//   selectedPhoto: null,
//   toggleModal: false,
//   onTopicSelect: null
// };

// // Define reducer function
// const reducer = (state, action) => {
//   switch (action.type) {
//   case ACTIONS.FAV_PHOTO_ADDED:
//     return { ...state, favourites: [...state.favourites, action.payload.photoId] };
//   case ACTIONS.FAV_PHOTO_REMOVED:
//     return { ...state, favourites: state.favourites.filter(id => id !== action.payload.photoId) };
//   case ACTIONS.SET_PHOTO_DATA:
//     return { ...state, photoData: action.payload.photoData };
//   case ACTIONS.SET_TOPIC_DATA:
//     return { ...state, topicData: action.payload.topicData };
//   case ACTIONS.SELECT_PHOTO:
//     return { ...state, selectedPhoto: action.payload.selectedPhoto };
//   case ACTIONS.DISPLAY_PHOTO_DETAILS:
//     return { ...state, isModalOpen: action.payload.isModalOpen, selectedPhoto: action.payload.selectedPhoto };
//   case ACTIONS.TOGGLE_MODAL:
//     return { ...state, isModalOpen: !state.isModalOpen };
//   case ACTIONS.ON_TOPIC_SELECT:
//     return { ...state, selectedTopic: action.payload.topicData };
//   default:
//     throw new Error(`Unsupported action type: ${action.type}`);
//   }
// };
// const AppDataContext = createContext();

// export const useAppDataContext = () => {
//   return useContext(AppDataContext);
// };

// export const AppDataProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   //Fetch all photos, only 1 render never again
//   const getAllPhotos = (() => {
//     fetch(`/api/photos`)
//       .then(res => res.json())
//       .then(photoData => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData}));
//   });

//   //Store All Photo Data
//   useEffect(() => {
//     getAllPhotos();
//   }, []);

//   //Fetch All topics
//   useEffect(() => {
//     fetch(`/api/topics`)
//       .then(res => res.json())
//       .then(topicData => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData}));
//   }, []);

//   //Fetch Photos By Topic
//   useEffect(() => {
//     if (state.topicData) {
//       fetch(`/api/topics/photos/${state.topicData}`)
//         .then(res => res.json())
//         .then(topicData =>dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: topicData}));
//     }
//   }, [state.topicData]);

//   //Fetch Photos By Topic when selected on Navbar
//   useEffect(() => {
//     if (state.onTopicSelect) {
//       fetch(`/api/topics/photos/${state.selectedTopic}`)
//         .then(res => res.json())
//         .then(topicData =>dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: topicData}));
//     }
//   }, [state.selectedTopic]);

//   return (
//     <AppDataContext.Provider value={{state, dispatch}}>
//       {children}
//     </AppDataContext.Provider>
//   );
// };
