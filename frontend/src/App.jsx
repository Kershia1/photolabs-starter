
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


// import React, { useState} from 'react';
// import HomeRoute from 'routes/HomeRoute';
// import { FavouritesProvider } from './components/FavouritesContext';
// import { AppDataProvider } from 'context/AppDataContext';
// import { useApplicationData } from 'hooks/useApplicationData';
// import './App.scss';

// // Note: Rendering a single component to build components in isolation
// const App = () => {
//   const { state, toggleModal, onClosePhotoDetailsModal, onTopicSelect } = useApplicationData();
//   const [photoDetails, isModalOpen] = state;

//   return (
//     <FavouritesProvider>
//       <AppDataProvider>
//         <HomeRoute
//           photoDetails={photoDetails}
//           setPhotoDetails={onClosePhotoDetailsModal}
//           toggleModal={toggleModal}
//           isModalOpen={isModalOpen}
//           onTopicSelect={onTopicSelect}
//         />
//       </AppDataProvider>
//     </FavouritesProvider>
//   );
// };

// export default App;