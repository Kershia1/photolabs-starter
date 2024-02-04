
import React, {useState} from "react";
import "../styles/PhotoListItem.scss";
import "../styles/PhotoFavButton.scss";
import PhotoFavButton from "./PhotoFavButton";
import { useFavourites } from "./FavouritesContext";

const PhotoListItem = ({ item, toggleModal }) => {

  const { id, location, urls, user } = item;
  const { city, country } = location;
  const { regular } = urls;
  const { username, profile } = user;
  const { favourites, setFavourites } = useFavourites();
  console.log("username", username);
  console.log(user);

  const toggleFavourite = (photoId) => {
    console.log('Favorite clicked');
    if (favourites.includes(photoId)) {
      setFavourites(favourites.filter((id) => id !== photoId));
    } else {
      setFavourites([...favourites, photoId]);
    }
  };

  return (
    <section key={id} className="photo-list__item" onClick={() => toggleModal(id)}>
      <PhotoFavButton
        like={favourites.includes(id)}
        handleClick={() => toggleFavourite(id)}
      />
  
      <img className="photo-list__image" src={regular ? regular : 'default-image.jpg'} alt={username ? username : 'User not available'} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt={username} />
        <div className="photo-list__user-info">{username}</div>
      </div>
      <div className="photo-list__user-location">
        <div>{location ? `${city}, ${country}` : 'Location not available'}</div>
      </div>
    </section>
  );
};

export default PhotoListItem;
