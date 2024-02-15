import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ data, onLoadTopic }) => {

  const handleTopicClick = () => {
    onLoadTopic(data.id);
  };

  return (
    <div className="topic-list__item">
      <span onClick={handleTopicClick}>{data.title}</span>
    </div>
  );
};

export default TopicListItem;
