import React, { useState} from 'react';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import { FavouritesProvider } from './components/FavouritesContext';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [photoDetails, setPhotoDetails] = useState(false);
  return (
    <FavouritesProvider>
      <HomeRoute photos={photos} topics={topics} photoDetails={photoDetails}setPhotoDetails={setPhotoDetails} />
    </FavouritesProvider>
  );
};

export default App;
/**When we are done organizing the code, the App component should look similar to the example provided below.
 *
 * This Component will only be responsible for passing data to other components. The custom Hook now owns the data management.
 *
 * const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    // React components
  );
}
 *
 */