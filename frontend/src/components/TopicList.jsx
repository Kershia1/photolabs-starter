import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";


const TopicList = ({ topics, onLoadTopic }) => {
  const topicItems = topics ? topics.map((topic) => {
    return (
      <TopicListItem
        key={topic.id}
        data={topic}
        onLoadTopic={onLoadTopic}
      />
    );
  }) : [];
  return <div className="top-nav-bar__topic-list">{topicItems}</div>;
};

export default TopicList;