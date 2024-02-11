import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ props }) => {
  //pass from direct parent
  const photos = props.photos.map((photo) => {
    return (
      <PhotoListItem
        key={photo.id}
        data={photo}
        onPhotoSelect={props.onPhotoSelect}
      />
    );
  });
  return <ul className="photo-list">{photos}</ul>;
  //move to here
};

export default PhotoList;