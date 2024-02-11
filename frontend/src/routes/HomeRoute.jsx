import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';
import '../styles/HomeRoute.scss';
import { useFavourites } from 'components/FavouritesContext';
import useApplicationData from 'hooks/useApplicationData';

const HomeRoute = () => {
  console.log('state.photoData:', state.photoData);
  console.log('state.TopicData:', state.TopicData);
  const { state, toggleModal, closeModal } = useApplicationData();
  const { favourites } = useFavourites();

  return (
    <div className="home-route">
      <TopNavigationBar topics={state.topicData} favouritesCount={favourites.length} />
      <PhotoList photos={state.photoData} handleClick={toggleModal} />
      {state.isModalOpen && <PhotoDetailsModal photos={state.photoData} photoId={state.selectedPhoto} closeModal={closeModal} />}
    </div>
  );
};

export default HomeRoute;