import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = () => {

  const getTopicById = (id) => {
    return sampleDataForTopicList.find((topic) => topic.id === id);
  };

  const topic = getTopicById("2");
  console.log(topic);
  return (
    <div className="top-nav-bar__topic-list">
      {topic && (
        <TopicListItem
          key={topic.id}
          id={topic.id}
          slug={topic.slug}
          label={topic.label}
        />
      )};
    </div>
  );
};

export default TopicList;
