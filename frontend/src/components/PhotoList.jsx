import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, handleClick }) => {

  return (
    <ul className="photo-list">
      {photos.map((item) => {
        return (
          <PhotoListItem
            key={item.id}
            item={item}
            handleClick={handleClick}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;