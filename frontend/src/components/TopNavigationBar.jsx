import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';

const TopNavigation = ({ topics, favouritesCount }) => {
  //adding the favouritesCount prop to count amount of likes
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      <FavBadge count={favouritesCount} />
    </div>
  );
};

export default TopNavigation;