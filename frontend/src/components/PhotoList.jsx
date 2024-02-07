import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import { useFavourites } from "./FavouritesContext";

const PhotoList = ({ photos, toggleModal }) => {

  return (
    <ul className="photo-list">
      {photos.map((item) => {
        return (
          <PhotoListItem
            key={item.id}
            item={item}
            // toggleFavourite={toggleFavourite}
            // favourites={favourites}
            toggleModal={toggleModal}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;