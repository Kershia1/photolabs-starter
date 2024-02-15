import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, onPhotoSelect }) => {

  const photoItems = photos ? photos.map((photo) => {
    return (
      <PhotoListItem
        key={photo.id}
        data={photo}
        onPhotoSelect={onPhotoSelect}
      />
    );
  }) : [];
  return <ul className="photo-list">{photoItems}</ul>;
};

export default PhotoList;