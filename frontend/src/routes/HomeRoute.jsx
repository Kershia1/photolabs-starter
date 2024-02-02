import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';
import { useState } from 'react';

const HomeRoute = ({ photos, topics}) => {
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (photoId) => {
    if (favourites.includes(photoId)) {
      setFavourites(favourites.filter((id) => id !== photoId));
    } else {
      setFavourites([...favourites, photoId]);
    }
  };
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} setFavouritesCount={favourites.lenght}/>
      <PhotoList photos={photos} toggleFavourite={toggleFavourite} />
    </div>
  );
};

export default HomeRoute;

/*
Implement the following changes:
-maintain state in app to track fav photos with the useState hook

-at the onClick add photoId to the favourite photo array

-when clicked aagain use my toogle funtion to remove from array.

-somehow pass the notification to the navBar to display the number of favs. ,lenght of the array
*/