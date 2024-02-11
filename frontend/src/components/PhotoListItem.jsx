

import React, {useState} from "react";
import "../styles/PhotoListItem.scss";
import "../styles/PhotoFavButton.scss";
import PhotoFavButton from "./PhotoFavButton";
import { useFavourites } from "./FavouritesContext";

const PhotoListItem = ({ item, handleClick }) => {

  const { id, urls, user, location} = item;
  const { city, country } = location;
  const { regular } = urls;
  const { name, profile } = user;
  const { favourites, toggleFavourite } = useFavourites();

  return (
    <section key={id} className="photo-list__item" onClick={() => {
      console.log('Photo clicked with id:', id);
      console.log('toggleModal function:', handleClick);
      handleClick(id);
    }}>
      <PhotoFavButton
        like={favourites.includes(id)}
        handleClick={() => toggleFavourite(id)}
      />
  
      <img className="photo-list__image" src={regular ? regular : 'default-image.jpg'} alt={name ? name : 'User not available'} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt={name} />
        <div className="photo-list__user-info-container">
          <div className="photo-list__user-info">{name}</div>
          <div className="photo-list__user-location">
            <div>{location ? `${city}, ${country}` : 'Location not available'}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoListItem;