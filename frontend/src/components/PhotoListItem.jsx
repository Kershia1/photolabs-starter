import React from "react";
import "../styles/PhotoListItem.scss";
import "../styles/PhotoFavButton.scss";
import PhotoFavButton from "./PhotoFavButton";
import { useFavourites } from "./FavouritesContext";

const PhotoListItem = ({ data, onPhotoSelect }) => {
  // const { data, onPhotoSelect } = props;
  const { favourites, toggleFavourite } = useFavourites();

  console.log(data);

  const toggleModal = () => {
    onPhotoSelect(data);
  };

  return (
    <section className="photo-list__item">
      <PhotoFavButton
        like={favourites.includes(data.id)}
        handleClick={() => toggleFavourite(data.id)}
        photo={data}
      />
  
      <img className="photo-list__image" src={data.urls.regular} onClick={toggleModal} />

      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={data.user.profile}/>

        <div className="photo-list__user-info-container">
          <div className="photo-list__user-info">{data.user.name}</div>
          
          <div className="photo-list__user-location">
            <div>{data.location.county}, {data.location.city}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoListItem;

