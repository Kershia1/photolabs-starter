import React from "react";
import "../styles/PhotoListItem.scss";

//pass as props to PhotoListItem
const PhotoListItem = ({ id, location, imageSource, username, profile }) => {
  const styledPhotoListItem = {
    borderRadius: '8px 8px 8px 8px',
    userSelect: 'none',
    width: '300px',
    height: '200px',
    objectit: 'cover',
  };

  return (
    <section className="photo-list__item ">
      <img className="photo-list__image" src={imageSource} alt={username} style={styledPhotoListItem}></img>
      <div className="photo-list__user-details"></div>
      <img src={profile} />
      <div className="photo-list__user-info" id={id}></div>
      <div className="photo-list__user-name">{username}</div>
      <div className="photo-list__user-location">
        <p>{location.city}, {location.country}</p>
      </div>
    </section>
  );
};

export default PhotoListItem;
