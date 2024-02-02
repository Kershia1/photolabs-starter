import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ like, handleClick }) => {
  //take in passed down props from PhotoListItem

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon displayAlert={like} selected={like}/>
      </div>
    </div >
  );
};

export default PhotoFavButton;
