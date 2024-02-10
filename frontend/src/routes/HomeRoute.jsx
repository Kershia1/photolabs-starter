import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';
import '../styles/HomeRoute.scss';
import { useFavourites } from 'components/FavouritesContext';
import { useAppDataContext } from 'context/AppDataContext';

const HomeRoute = ({ photoDetails, setPhotoDetails, updateToFavPhotoIds,toggleModal, isModalOpen, onTopicSelect}) => {
  console.log(toggleModal);
  const { state } = useAppDataContext();
  const { photoData: photos, topicData: topics } = state;

  const { favourites } = useFavourites();
  

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favouritesCount={favourites.length} onTopicSelect={onTopicSelect}/>
      <PhotoList photos={photos} toggleModal={toggleModal} />
      <PhotoDetailsModal photoDetails={photoDetails} setPhotoDetails={setPhotoDetails} handleClick={toggleModal} toggleFavourite={updateToFavPhotoIds} isModalOpen={isModalOpen} toggleModal={toggleModal}/>
    </div>
  );
};

export default HomeRoute;