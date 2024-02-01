import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos}) => {

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