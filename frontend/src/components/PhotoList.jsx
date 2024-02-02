import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import { useFavourites } from "./FavouritesContext";

const PhotoList = ({ photos, toggleFavourite, favourites, toggleModal}) => {

  return (
    <ul className="photo-list">
      {photos.map((item) => {
        return (
          <PhotoListItem
            key={item.id}
            id={item.id}
            location={item.location}
            imageSource={item.urls.regular}
            username={item.user.username}
            toggleFavourite={toggleFavourite}
            favourites={favourites}
            profile={item.user.profile}
            toggleModal={toggleModal}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;