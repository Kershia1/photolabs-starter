import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import { useFavourites } from "./FavouritesContext";

const PhotoList = ({ photos, toggleFavourite, toggleModal }) => {
  const { favourites } = useFavourites();

  console.log(photos);

  return (
    <ul className="photo-list">
      {photos.map((item) => {
        return (
          <PhotoListItem
            key={item.id}
            item={item}
            toggleFavourite={toggleFavourite}
            favourites={favourites}
            toggleModal={toggleModal}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;