import React from "react";
import "../styles/PhotoListItem.scss";
import "../styles/PhotoFavButton.scss";
import PhotoFavButton from "./PhotoFavButton";
import { useFavourites } from "./FavouritesContext";

const PhotoListItem = ({ data, onPhotoSelect }) => {
  const { favourites, toggleFavourite } = useFavourites();

  const toggleModal = () => {
    onPhotoSelect(data);
  };

  return (
    <section className="photo-list__item">
      <PhotoFavButton
        like={favourites.includes(data.id)}
        onFavClick={() => toggleFavourite(data.id)}
        photo={data}
      />
  
      <img className="photo-list__image" src={data.urls.regular} onClick={toggleModal} />

      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={data.user.profile}/>

        <div className="photo-list__user-info-container">
          <div className="photo-list__user-info"> {data.user.name} </div>
          <div className="photo-list__user-location">
            {data.location.city}, {data.location.country}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default PhotoListItem;