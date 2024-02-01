import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = ({id, slug, label}) => {
  const styledTopicListItem = {
    lineHeight: '24px',
    marginLeft: '24px',
  };

  const styledTopicListSpan = {
    fontSize: '18px',
    textDecoration: 'none',
    fontWeight: '500',
    color: '#2b2b2b',
  };

  return (
    <div className="topic-list__item">
      <a href={`/${slug}`} style={styledTopicListItem}>
        <span style={styledTopicListSpan}>{label}</span>
      </a>
    </div>
  );
};

export default TopicListItem;
