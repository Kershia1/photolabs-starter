import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {
  const [like, setLike] = useState(false);

  const handleClick = () => {
    setLike(!like);
    console.log('FavIcon clicked');
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon displayAlert={like} selected={like}/>
      </div>
    </div >
  );
};

export default PhotoFavButton;
