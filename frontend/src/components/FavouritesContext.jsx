import React from 'react';
import { createContext, useContext, useState } from 'react';

const FavouritesContext = createContext();

export default FavouritesContext;

// Provider component that wraps your app and makes the favs state accessible to all components
//children propr is the components that are wrapped by the provider
//created by react to specifically handle this situation to negate the need to explicitly pass down props through every component

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (photoId) => {
    if (favourites.includes(photoId)) {
      setFavourites(favourites.filter((id) => id !== photoId));
    } else {
      setFavourites([...favourites, photoId]);
    }
  };

  return (
    <FavouritesContext.Provider value={{ favourites, toggleFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};

// Custom hook to use the favourites state
export const useFavourites = () => useContext(FavouritesContext);
