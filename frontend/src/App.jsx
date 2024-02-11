
import React from 'react'; // Import the 'React' package

import './App.scss';
import useApplicationData from 'hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'components/PhotoDetailsModal';
import { FavouritesProvider } from './components/FavouritesContext';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    toggleModal,
    closeModal,
    getAllPhotos,
    onLoadTopic,
    // updateToFavPhotoIds
  } = useApplicationData();

  // const photos = state.photoData; don't see the need for this

  //lifiting state management to the top level for modal I wish I had left if here
  return (
    <div className="App">
      <FavouritesProvider>
        <HomeRoute
          photos={state.photoData}
          topics={state.topicData}
          toggleModal={toggleModal}
          isModalOpen={state.isModalOpen}
          closeModal={closeModal}
          getAllPhotos={getAllPhotos}
          onLoadTopic={onLoadTopic}
        />
        {state.isModalOpen && (
          <PhotoDetailsModal
            photos={state.photoData}
            photoId={state.selectedPhoto}
            closeModal={closeModal}
            // updateToFavPhotoIds={updateToFavPhotoIds}?
          />
        )}
      </FavouritesProvider>
    </div>
  );
};

export default App;