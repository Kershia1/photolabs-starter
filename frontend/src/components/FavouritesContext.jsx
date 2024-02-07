import React from 'react';
import { createContext, useContext, useState } from 'react';

const FavouritesContext = createContext();

export default FavouritesContext;

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
