import React from "react";
import { useState } from "react"; //array
import "../styles/PhotoListItem.scss";
import "../styles/PhotoFavButton.scss";
import PhotoFavButton from "./PhotoFavButton";
import { useFavourites } from "./FavouritesContext"; //object

//pass as props to PhotoListItem
const PhotoListItem = ({ id, location, imageSource, username, profile, toggleModal }) => {
  //pass as props to PhotoFavButton
  const [like, setLike] = useState(false);
  const { favourites, setFavourites } = useFavourites();

  const toggleFavourite = (photoId) => {
    console.log('Favorite clicked');
    if (favourites.includes(photoId)) {
      setFavourites(favourites.filter((id) => id !== photoId));
    } else {
      setFavourites([...favourites, photoId]);
    }
  };

  //pass as props to PhotoFavButton
  // const handleClick = () => {
  //   setLike(prevLike => !prevLike);
  //   console.log('FavIcon clicked');
  // };

  //Need to remove in-line styling
  const styledPhotoListItem = {
    borderRadius: '8px 8px 8px 8px',
    userSelect: 'none',
    width: '300px',
    height: '200px',
    objectit: 'cover',
  };

  const styledProfilePhoto = {
    objectFit: 'cover',
    borderRadius: '100%',
    verticalAlign: 'middle',
    marginRight: '8px',
    width: '40px',
    height: '40px',
  };

  return (
    <section className="photo-list__item" onClick={toggleModal}>
      <PhotoFavButton
        like={favourites.includes(id)}
        handleClick={() => toggleFavourite(id)}/>
      <img className="photo-list__image" src={imageSource} alt={username} style={styledPhotoListItem}></img>
      <div className="photo-list__user-details"></div>
      <img src={profile} style={styledProfilePhoto} />
      <div className="photo-list__user-info" id={id}></div>
      <div className="photo-list__user-name">{username}</div>
      <div className="photo-list__user-location">
        <p>{location.city}, {location.country}</p>
      </div>
    </section>
  );
};

export default PhotoListItem;

