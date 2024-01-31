import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {
  const [like, setLike] = useState(false);

  // const handleClick = () => {
  //   setLike(!like);
  //   console.log('FavIcon clicked');
  // }; this is not the best as it does not handle the most recent state

  const handleClick = () => {
    setLike(prevLike => !prevLike);
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
