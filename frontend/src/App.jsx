import React, { useState} from 'react';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import { FavouritesProvider } from './components/FavouritesContext';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    toggleModal,
    isModalOpen,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  } = useApplicationData(photos);

  const [photoDetails, setPhotoDetails] = useState(false);

  return (
    <FavouritesProvider>
      <HomeRoute photos={photos}
        topics={topics}
        photoDetails={photoDetails}
        setPhotoDetails={onClosePhotoDetailsModal}
        toggleModal={toggleModal}
        isModalOpen={isModalOpen}
      />
    </FavouritesProvider>
  );
};

export default App;