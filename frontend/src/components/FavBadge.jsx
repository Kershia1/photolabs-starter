import React from 'react';
import { useState } from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  const [like, setLike] = useState(false);

  const handleClick = () => {
    setLike(prevLike => !prevLike);
    console.log('FavBadge clicked');
  };

  return (
    <div className="fav-badge" onClick={handleClick}>
      <FavIcon displayAlert={!!isFavPhotoExist} />
    </div>
  );
};

export default FavBadge;