import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';

const TopNavigation = ({ topics, onLoadTopic, favouritesCount }) => {
  // const { topics, onLoadTopic, favouritesCount } = props;
  //not sure if I need to pass the prop favouritesCount here

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onLoadTopic={onLoadTopic} />
      <FavBadge count={favouritesCount} />
    </div>
  );
};

export default TopNavigation;