import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {/* <div className={`App ${dark}`}></div> */}
      <HomeRoute />
    </div>
  );
};

export default App;
