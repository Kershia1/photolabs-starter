import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import photos from "../mocks/photos";

const PhotoList = () => {

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
            profile={item.user.profile}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;