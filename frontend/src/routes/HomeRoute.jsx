import React, { useState } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';
import '../styles/HomeRoute.scss';
import { useFavourites } from 'components/FavouritesContext';

const HomeRoute = ({ photos, topics,photoDetails, setPhotoDetails}) => {
  const {favourites, setFavourites} = useFavourites();

  const toggleFavourite = (photoId) => {
    if (favourites.includes(photoId)) {
      setFavourites(favourites.filter((id) => id !== photoId));
    } else {
      setFavourites([...favourites, photoId]);
    }
  };

  const toggleModal = () => {
    setPhotoDetails(prevPhotoDetails => !prevPhotoDetails);
    console.log('Modal clicked');
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favouritesCount={favourites.length}/>
      <PhotoList photos={photos} toggleFavourite={toggleFavourite} toggleModal={toggleModal}/>
      <PhotoDetailsModal photoDetails= {photoDetails} handleClick={toggleModal}/>
    </div>
  );
};

export default HomeRoute;