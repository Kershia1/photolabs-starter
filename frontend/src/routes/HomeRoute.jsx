import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';
import '../styles/HomeRoute.scss';
import { useFavourites } from 'components/FavouritesContext';

const HomeRoute = ({ photos, topics, photoDetails, setPhotoDetails, onPhotoSelect, updateToFavPhotoIds,toggleModal, isModalOpen}) => {
  console.log(toggleModal);

  const { favourites } = useFavourites();

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favouritesCount={favourites.length}/>
      <PhotoList photos={photos} toggleModal={toggleModal} />
      <PhotoDetailsModal photoDetails={photoDetails} setPhotoDetails={setPhotoDetails} handleClick={toggleModal} toggleFavourite={updateToFavPhotoIds} isModalOpen={isModalOpen} toggleModal={toggleModal}/>
    </div>
  );
};

export default HomeRoute;