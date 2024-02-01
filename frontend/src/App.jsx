import React from 'react';
import PhotoList from './components/PhotoList';
// import TopicList from 'components/TopicList';
import TopNavigationBar from 'components/TopNavigationBar';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {/* <div className={`App ${dark}`}></div> */}
      <TopNavigationBar/>
      {/* <TopicList/> */}
      <PhotoList/>
    </div>
  );
};

export default App;
