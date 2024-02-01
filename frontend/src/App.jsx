import React from 'react';
import PhotoList from './components/PhotoList';
// import PhotoListItem from './components/PhotoListItem';
// import TopicListItem from 'components/TopicListItem';
import TopicList from 'components/TopicList';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {/* <div className={`App ${dark}`}></div> */}
      <TopicList/>
      <PhotoList/>
    </div>
  );
};

export default App;
