import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics}) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics}/>
      <PhotoList photos={photos} />
    </div>
  );
};

export default HomeRoute;

//create a new file to implement global state to manage liked and favorite photos

// import React, { createContext, useContext, useState } from 'react';

// // Create the context
// const FavouritesContext = createContext();

// // Provider component that wraps your app and makes the favs state accessible to all components
// export const FavouritesProvider = ({children}) => {
//     const [favourites, setFavourites] = useState([]);

//     return (
//         <FavouritesContext.Provider value={{favourites, setFavourites}}>
//             {children}
//         </FavouritesContext.Provider>
//     );
// };

// // Custom hook to use the favourites state
// export const useFavourites = () => useContext(FavouritesContext);

// import React from 'react';
// import { useFavourites } from '../FavouritesContext';

// const PhotoListItem = () => {
//     // Access the global favourites state and methods to update it
//     const { favourites, setFavourites } = useFavourites();

//     const toggleFavourite = (photoId) => {
//         // Your logic here to add or remove a photo from favourites
//     };

//     return (
//         // Your component's UI here
//     );
// };