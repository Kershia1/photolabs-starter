import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({id, slug, label}) => {
  const styledTopicListItem = {
    lineHeight: '24px',
    marginLeft: '24px',
    textDecoration: 'none',
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
