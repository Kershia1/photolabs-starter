import React from 'react';
// import { useState } from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, count }) => {
  //   if (count > 0) {
  //     return <FilledHeartIcon />;
  //   } else {
  //     return <OutlinedHeartIcon />;
  //   }
  // };

  return (
    <div className="fav-badge" >
      {/* <FavBadge displayAlert={!!isFavPhotoExist} selected={count > 0} /> */}
      <FavIcon displayAlert={!!isFavPhotoExist} selected={count > 0} />
      {count > 0 && <span className="fav-badge__count">{count}</span>}
    </div>
  );
};

export default FavBadge;