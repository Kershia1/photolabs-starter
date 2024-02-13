import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ data, onLoadTopic }) => {
  // const { } = props;
  // console.log('Topic Item Clicked');

  const handleTopicClick = () => {
    onLoadTopic(data);
  };

  return (
    <div className="topic-list__item">
      <span onClick={handleTopicClick}>{data.title}</span>
    </div>
  );
};

export default TopicListItem;
