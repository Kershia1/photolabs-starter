import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';
import { useFavourites } from 'components/FavouritesContext';


const HomeRoute = ({ topics, photos, onPhotoSelect, getAllPhotos, onLoadTopic }) => {
  // const  = props;

  console.log(photos, topics);

  const { favourites } = useFavourites();

  // Check if photos and topics are not undefined before rendering the components
  if (!photos || !topics) {
    return null;
  }

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} onLoadTopic={onLoadTopic}favouritesCount={favourites.length} />
      <PhotoList photos={photos} getAllPhotos={getAllPhotos} onPhotoSelect={onPhotoSelect} />
    </div>
  );
};

export default HomeRoute;