import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ props }) => {
  // const { data, onLoadTopic, topic } = props;
  const topics = props.topics.map((topic) => {
    return (
      key={topic.id}
      data={topic}
      onLoadTopic={props.onLoadTopic}
      />
    );
  });
  return <div className="top-nav-bar__topic-list"></div>;
};

export default TopicList;