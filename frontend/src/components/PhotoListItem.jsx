
import React, {useState} from "react";
import "../styles/PhotoListItem.scss";
import "../styles/PhotoFavButton.scss";
import PhotoFavButton from "./PhotoFavButton";
import { useFavourites } from "./FavouritesContext";

//Original PhotoListItem
//pass as props to PhotoListItem
const PhotoListItem = ({ item, toggleModal }) => {

  const { id, location, urls, user } = item;
  const { city, country } = location;
  const { regular } = urls;
  const { username, profile } = user;

  // const { id, user, imageSource, username, profile, location} = item;
  // console.log(item);

  // const PhotoListItem = ({ id, location, imageSource, username, profile, toggleModal }) => {
  //pass as props to PhotoFavButton
  // const [like, setLike] = useState(false);
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
    <section key={id} className="photo-list__item" onClick={() => toggleModal(id)}>
      <PhotoFavButton
        like={favourites.includes(id)}
        handleClick={() => toggleFavourite(id)}
      />
  
      <img className="photo-list__image" src={regular ? regular : 'default-image.jpg'} alt={username ? username : 'User not available'} />
      <div>{username ? `Username: ${username}` : 'User not available'}</div>
  
      <img className="photo-list__image" src={regular} alt={username} style={styledPhotoListItem}></img>
  
      <div className="photo-list__user-details"></div>
      <img src={profile} style={styledProfilePhoto} />
      <div className="photo-list__user-info" id={id}></div>
      <div className="photo-list__user-location">
        <div>{location ? `${city}, ${country}` : 'Location not available'}</div>
      </div>
    </section>
  );
};

//   return (
//     <section key={id} className="photo-list__item" onClick={() => toggleModal(id)}>

//       <PhotoFavButton
//         like={favourites.includes(id)}
//         handleClick={() => toggleFavourite(id)}/>

//       {/* <img src={imageSource} alt={user.username} /> */}
//       <img className="photo-list__image" src={imageSource ? imageSource : 'default-image.jpg'} alt={user ? user.username : 'User not available'} />
//       {/* <div>{user.username}</div> */}
//       <div>{user ? `Username: ${user.username}` : 'User not available'}</div>

//       <img className="photo-list__image" src={imageSource} alt={username} style={styledPhotoListItem}></img>

//       <div className="photo-list__user-details"></div>
//       <img src={profile} style={styledProfilePhoto} />
//       <div className="photo-list__user-info" id={id}></div>
//       {/* <div className="photo-list__user-name">{username}</div> */}
//       <div className="photo-list__user-location">

//         <div>{location ? `${location.city}, ${location.country}` : 'Location not available'}</div>
//       </div>
        
//     </section>
//   );
// };

//   return (
//     <section className="photo-list__item" onClick={() => toggleModal(id)}>
//       <PhotoFavButton
//         like={favourites.includes(id)}
//         handleClick={() => toggleFavourite(id)}/>
//       <img className="photo-list__image" src={imageSource} alt={username} style={styledPhotoListItem}></img>
//       <div className="photo-list__user-details"></div>
//       <img src={profile} style={styledProfilePhoto} />
//       <div className="photo-list__user-info" id={id}></div>
//       <div className="photo-list__user-name">{username}</div>
//       <div className="photo-list__user-location">
//         <p>{location ? `${location.city}, ${location.country}` : 'Location not available'}</p>
//       </div>
//     </section>
//   );
// };


// const PhotoListItem = ({ item, toggleFavourite, favourites, toggleModal }) => {
//   const { id, urls, user, location } = item;
  

// {/* <p>{location.city}, {location.country}</p> */}

// {/* // <section className="photo-list__item" onClick={toggleModal}> passing to look up by id and then retirve photos array*/}
//Moded PhotoListItem

// const PhotoListItem = ({ item, toggleModal }) => {
//   const { favourites, setFavourites } = useFavourites();

//   if (!item || !item.urls || !item.user || !item.user.profile) {
//     return null;
//   }

//   const toggleFavourite = (photoId) => {
//     console.log('Favorite clicked');
//     if (favourites.includes(photoId)) {
//       setFavourites(favourites.filter((id) => id !== photoId));
//     } else {
//       setFavourites([...favourites, photoId]);
//     }
//   };

//   const styledPhotoListItem = {
//     borderRadius: '8px 8px 8px 8px',
//     userSelect: 'none',
//     width: '300px',
//     height: '200px',
//     objectFit: 'cover',
//   };

//   const styledProfilePhoto = {
//     objectFit: 'cover',
//     borderRadius: '100%',
//     verticalAlign: 'middle',
//     marginRight: '8px',
//     width: '40px',
//     height: '40px',
//   };

//   return (
//     <section className="photo-list__item" onClick={() => toggleModal(item)}>
//       <PhotoFavButton
//         like={favourites.includes(item.id)}
//         handleClick={() => toggleFavourite(item.id)}
//       />
//       <img
//         className="photo-list__image"
//         src={`/img${item.urls && item.urls.regular}`}
//         alt={item.user && item.user.username}
//         style={styledPhotoListItem}
//       />
//       <div className="photo-list__user-details">
//         <img
//           src={`/img${item.user && item.user.profile}`}
//           alt={item.user && item.user.username}
//           style={styledProfilePhoto}
//         />
//         <div className="photo-list__user-info" id={item.id}>
//           <div className="photo-list__user-name">{item.user && item.user.username}</div>
//           <div className="photo-list__user-location">
//             <p>{item.location && `${item.location.city}, ${item.location.country}`}</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

export default PhotoListItem;
