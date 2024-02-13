
import React from 'react'; // Import the 'React' package

import './App.scss';
import useApplicationData from 'hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { FavouritesProvider } from './components/FavouritesContext';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    onPhotoSelect,
    closeModal,
    getAllPhotos,
    onLoadTopic,
    // updateToFavPhotoIds
  } = useApplicationData();

  // console.log(state);

  return (
    <div className="App">
      <FavouritesProvider>
        <HomeRoute
          photos={state.photoData}
          topics={state.topicData}
          onPhotoSelect={onPhotoSelect}
          isModalOpen={state.isModalOpen}
          closeModal={closeModal}
          getAllPhotos={getAllPhotos}
          onLoadTopic={onLoadTopic}
        />
        {state.isModalOpen && (
          <PhotoDetailsModal
            photos={state.photoData}
            photoId={state.selectedPhoto}
            onPhotoSelect={onPhotoSelect}
            closeModal={closeModal}
            // updateToFavPhotoIds={updateToFavPhotoIds}?
          />
        )}
      </FavouritesProvider>
    </div>
  );
};

export default App;