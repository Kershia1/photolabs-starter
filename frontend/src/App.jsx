import React, { useState} from 'react';
import HomeRoute from 'routes/HomeRoute';
import { FavouritesProvider } from './components/FavouritesContext';
import { AppDataProvider } from 'context/AppDataContext';
import { useApplicationData } from 'hooks/useApplicationData';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, toggleModal, onClosePhotoDetailsModal } = useApplicationData();
  const [photoDetails, isModalOpen] = state;

  return (
    <FavouritesProvider>
      <AppDataProvider>
        <HomeRoute
          photoDetails={photoDetails}
          setPhotoDetails={onClosePhotoDetailsModal}
          toggleModal={toggleModal}
          isModalOpen={isModalOpen}
        />
      </AppDataProvider>
    </FavouritesProvider>
  );
};

export default App;