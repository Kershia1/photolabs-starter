
import React from 'react'; // Import the 'React' package

import './App.scss';
import useApplicationData from 'hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
// import PhotoDetailsModal from 'components/PhotoDetailsModal';
import { FavouritesProvider } from './components/FavouritesContext';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    toggleModal,
    isModalOpen,
    closeModal,
    getAllPhotos,
    getPhotosByTopic
  } = useApplicationData();

  const photos = state.photoData;

  return (
    <FavouritesProvider>
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        handleClick={toggleModal}
        isModalOpen={state.isModalOpen}
        closeModal={closeModal}
        getAllPhotos={getAllPhotos}
        getPhotosByTopic={getPhotosByTopic}
      />
    </FavouritesProvider>
  );
};

export default App;