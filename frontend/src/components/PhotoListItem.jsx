

import React, {useState} from "react";
import "../styles/PhotoListItem.scss";
import "../styles/PhotoFavButton.scss";
import PhotoFavButton from "./PhotoFavButton";
import { useFavourites } from "./FavouritesContext";

const PhotoListItem = ({ item, toggleModal }) => {
  console.log(typeof toggleModal);

  const { id, urls, user, location} = item;
  const { city, country } = location;
  const { regular } = urls;
  const { name, profile } = user;
  const { favourites, toggleFavourite } = useFavourites();

  return (
    <section key={id} className="photo-list__item" onClick={() => {
      console.log('Photo clicked with id:', id);
      console.log('toggleModal function:', toggleModal);
      toggleModal(id);
    }}>
      <PhotoFavButton
        like={favourites.includes(id)}
        handleClick={() => toggleFavourite(id)}
      />
  
      <img className="photo-list__image" src={regular ? regular : 'default-image.jpg'} alt={name ? name : 'User not available'} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt={name} />
        <div className="photo-list__user-info-container">
          <div className="photo-list__user-info">{name}</div>
          <div className="photo-list__user-location">
            <div>{location ? `${city}, ${country}` : 'Location not available'}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoListItem;


// import React, {useState} from "react";
// import "../styles/PhotoListItem.scss";
// import "../styles/PhotoFavButton.scss";
// import PhotoFavButton from "./PhotoFavButton";
// import { useFavourites } from "./FavouritesContext";
// import { useAppDataContext, ACTIONS } from "context/AppDataContext";

// const PhotoListItem = ({ item, toggleModal }) => {
//   console.log(typeof toggleModal);
//   const { dispatch } = useAppDataContext();
//   const { id, urls, user, location} = item;
//   const { city, country } = location;
//   const { regular } = urls;
//   const { name, profile } = user;
//   const { favourites, toggleFavourite } = useFavourites();


//   const handleClick = () => {
//     console.log('Photo clicked with id:', id);
//     console.log('toggleModal function:', toggleModal);
//     dispatch({ type: ACTIONS.SELECT_PHOTO, payload:{ selectedPhoto:item }});
//     dispatch({ type: ACTIONS.TOGGLE_MODAL });
//   };

//   return (
//     <section key={id} className="photo-list__item" onClick={(handleClick) => {
//     }}>
//       <PhotoFavButton
//         like={favourites.includes(id)}
//         handleClick={() => toggleFavourite(id)}
//       />
  
//       <img className="photo-list__image" src={regular ? regular : 'default-image.jpg'} alt={name ? name : 'User not available'} />
//       <div className="photo-list__user-details">
//         <img className="photo-list__user-profile" src={profile} alt={name} />
//         <div className="photo-list__user-info-container">
//           <div className="photo-list__user-info">{name}</div>
//           <div className="photo-list__user-location">
//             <div>{location ? `${city}, ${country}` : 'Location not available'}</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PhotoListItem;
