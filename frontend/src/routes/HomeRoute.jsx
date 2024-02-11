import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';
import { useFavourites } from 'components/FavouritesContext';


const HomeRoute = (props) => {
  const { topics, photos, onPhotoSelect, getAllPhotos, onLoadTopic } = props;

  const { favourites } = useFavourites();

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} onLoadTopic={onLoadTopic}favouritesCount={favourites.length} />
      <PhotoList photos={photos} getAllPhotos={getAllPhotos} onPhotoSelect={onPhotoSelect} />
    </div>
  );
};

export default HomeRoute;