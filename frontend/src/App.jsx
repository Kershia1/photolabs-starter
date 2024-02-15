
import React from 'react';
import './App.scss';
import useApplicationData from 'hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { FavouritesProvider } from './components/FavouritesContext';

const App = () => {
  const {
    state,
    onPhotoSelect,
    closeModal,
    getAllPhotos,
    onLoadTopic,
  } = useApplicationData();

  let similarPhotos = [];
  if (state.selectedPhoto && state.selectedPhoto.similar_photos) {
    const similarPhotoIds = state.selectedPhoto.similar_photos.map(photo => photo.id);
    similarPhotos = state.photoData.filter(photo => similarPhotoIds.includes(photo.id));
  }

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
            photos={similarPhotos}
            selectedPhoto={state.selectedPhoto}
            onPhotoSelect={onPhotoSelect}
            closeModal={closeModal}
          />
        )}
      </FavouritesProvider>
    </div>
  );
};

export default App;