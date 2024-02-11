import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';
import '../styles/HomeRoute.scss';
import { useFavourites } from 'components/FavouritesContext';
import useApplicationData from 'hooks/useApplicationData';

const HomeRoute = ({ photos, topics, getAllPhotos, getPhotosByTopic}) => {
  const { state, toggleModal, closeModal } = useApplicationData(photos);
  const { favourites } = useFavourites();

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favouritesCount={favourites.length} getAllPhotos={state.getAllPhotos} getPhotosByTopic={state.getPhotosByTopic} />
      <PhotoList photos={photos} handleClick={toggleModal} />
      {state.isModalOpen && <PhotoDetailsModal photoId={state.selectedPhoto} closeModal={closeModal} />}
    </div>
  );
};

export default HomeRoute;